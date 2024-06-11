import { useState } from "react";

import { Form, useNavigate } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";

import Dialog from "@/components/dialog";
import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";

export const action = async ({ context, request }: ActionFunctionArgs) => {
  const env = context.cloudflare.env as Env;

  const data = await request.formData();

  await env.DB.prepare(
    "INSERT INTO open_source_projects (name, description, website) VALUES ($1, $2, $3)"
  ).bind(data.get("name"), data.get("description"), data.get("website")).run();

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
        <Dialog title="My modal" onDismiss={handleDismiss}>
          <Form className="p-4 space-y-4" method="post">
            <label>
              <span className="block">Name</span>
              <input
                name="name"
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder=""
              />
            </label>

            <label>
              <span className="block">description</span>
              <textarea
                name="description"
                className="w-full border-gray-300 rounded-md"
                placeholder=""
              />
            </label>

            <label>
              <span className="block">Website</span>
              <input
                name="website"
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder=""
              />
            </label>

            <button className="w-full bg-emerald-600 text-white rounded-md py-2">
              Submit
            </button>
          </Form>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
