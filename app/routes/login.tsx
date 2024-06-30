import { authenticator } from "@/lib/auth.server";
import { authSessionStorage, flashSession } from "@/lib/cookie.server";
import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { useNavigation } from "@remix-run/react";
import { hash } from "@/lib/passwordHashing.server";

export const validator = withZod(
  z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Must be a valid email"),
    password: z.string().min(8, { message: "Password is too short" }),
  })
);

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.clone().formData();
  const result = await validator.validate(formData);
  if (result.error) {
    return validationError(result.error);
  }

  const cookieHeader = request.headers.get("Cookie");
  const fSession = await flashSession.getSession(cookieHeader);
  let user = null;

  try {
    user = await authenticator.authenticate("form", request, {
        formData,
        request,
        context,
    });
  } catch (e) {
    console.log(e);
  }
  if (user) {
    const session = await authSessionStorage.getSession(
      cookieHeader
    );

    session.set("user", user);
    session.set("strategy", "form");
    return redirect("/open-soruce-projects", {
      headers: {
        "Set-Cookie": await authSessionStorage.commitSession(session),
      },
    });
  } else {
    fSession.flash("toast", {
      variant: "destructive",
      title: "Uh oh! Login failed.",
      description: "Please check your email and password and try again.",
    });
    return redirect("/login", {
      headers: {
        "Set-Cookie": await flashSession.commitSession(fSession),
      },
    });
  }
}

export default function Login() {
  const { state } = useNavigation();
  
  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 mx-auto ">
        <ValidatedForm validator={validator} method="post" className="space-y-6" >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={state === "loading"}
              className="flex w-full justify-center rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </ValidatedForm>
      </div>
    </div>
  );
}
