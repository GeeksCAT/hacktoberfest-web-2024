import { authenticator } from "@/lib/auth.server";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/cloudflare";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { OpenSourceProject, open_source_projects, users } from "db/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const env = context.cloudflare.env as Env;

  const db = drizzle(env.DB);

  const userSession = await authenticator.isAuthenticated(request);
  /*
  if (!userSession) {
    return redirect("/login");
  }
  */
  const user = await db
    .select({
      id: users.id,
      email: users.email,
    })
    .from(users)
    .where(eq(users.email, userSession.email))
    .get();

  if (!user) {
    return redirect("/login");
  }

  const { results: openSourceProjects } = await db
    .select()
    .from(open_source_projects)
    .run();

  return json(openSourceProjects);
}

export async function action({ request, context }: ActionFunctionArgs) {
  const env = context.cloudflare.env as Env;
  const db = drizzle(env.DB);

  const data = await request.formData();

  await db
    .update(open_source_projects)
    .set({
      visible: data.get("visible"),
    })
    .where(eq(open_source_projects.id, data.get("id")))
    .run();
  return null;
}

export default function ManageOpenSourceProjects() {
  const openSourceProjects = useLoaderData<OpenSourceProject[]>();
  const submit = useSubmit();

  const logout = () => {
    submit(null, {
      method: "POST",
      action: "/action/logout",
    });
  };

  const updateProject = (project: OpenSourceProject) => {
    submit(project, {
      method: "POST",
      action: "/open-soruce-projects",
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={logout}
          className="bg-neutral-900 relative z-10 w-fit hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
        >
          Logout
        </button>
      </div>
      <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
        <thead className="text-zinc-500 dark:text-zinc-400">
          <tr className="">
            <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
              Id
            </th>
            <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
              Name
            </th>
            <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
              Description
            </th>
            <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
              Website
            </th>
            <th className="text-right border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
              Visible
            </th>
          </tr>
        </thead>
        <tbody>
          {openSourceProjects &&
            openSourceProjects.map((project) => (
              <tr key={project.id}>
                <td className="px-4 py-4 border-b border-b-zinc-950/10">
                  {project.id}
                </td>
                <td className="px-4 py-4 border-b border-b-zinc-950/10">
                  {project.name}
                </td>
                <td className="px-4 py-4 border-b border-b-zinc-950/10">
                  {project.description}
                </td>
                <td className="px-4 py-4 border-b border-b-zinc-950/10">
                  {project.website}
                </td>
                <td className="px-4 py-4 border-b border-b-zinc-950/10 text-right">
                  <input
                    type="checkbox"
                    checked={project.visible === 1}
                    onChange={(e) => {
                      updateProject({
                        ...project,
                        visible: e.target.checked ? 1 : 0,
                      });
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
