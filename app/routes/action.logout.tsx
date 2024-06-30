import { authenticator } from "@/lib/auth.server";
import type { LoaderFunctionArgs  } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";

export async function action({ request }: LoaderFunctionArgs ) {
  return await authenticator.logout(request, {
    redirectTo: "/",
  });
}

export async function loader() {
  return redirect("/");
}
