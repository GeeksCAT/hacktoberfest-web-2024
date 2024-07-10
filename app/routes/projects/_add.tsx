import { useState } from "react";

import { Form, useNavigate } from "@remix-run/react";
import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";

import { AnimatePresence } from "framer-motion";

import Dialog from "@/components/dialog";

import { open_source_projects } from "db/schema";
import { drizzle } from "drizzle-orm/d1";

export const action = async ({ context, request }: ActionFunctionArgs) => {
  const env = context.cloudflare.env as Env;

  const data = await request.formData();

  const db = drizzle(env.DB);

  await db
    .insert(open_source_projects)
    .values({
      name: data.get("name"),
      description: data.get("description"),
      website: data.get("website"),
      visible: "false",
    })
    .run();

  return redirect("/");
};

export default function Edit() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const navigate = useNavigate();

  function handleDismiss() {
    setIsModalOpen(false);
  }

  function handleExitComplete() {
    navigate("/", { replace: true });
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isModalOpen && (
        <Dialog onDismiss={handleDismiss}>
          <Form className="p-4 flex flex-col gap-4" method="post">
            <label>
              <span className="block">Nom</span>
              <input
                name="name"
                type="text"
                className="relative p-2 block w-full appearance-none rounded-lg text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 border border-zinc-950/10"
              />
            </label>

            <label>
              <span className="block">Descripció</span>
              <textarea
                name="description"
                maxLength={150}
                className="relative p-2 block w-full appearance-none rounded-lg text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 border border-zinc-950/10"
              />
            </label>

            <label>
              <span className="block">Lloc web</span>
              <input
                name="website"
                type="url"
                className="relative p-2 block w-full appearance-none rounded-lg text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 border border-zinc-950/10"
              />
            </label>

            <button className="w-full bg-emerald-600 text-white rounded-md py-2">
              Comparteix amb la comunitat!
            </button>
          </Form>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
