import { Link, Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen">
      <div className="prose lg:prose-xl p-10">
        <Link to="/agenda" className="flex items-center space-x-2 gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
            transform="rotate(180)"
          >
            <path d="m560 816-56-58 142-142H160v-80h486L504 394l56-58 240 240-240 240Z"></path>
          </svg>
          Torna a l'agenda
        </Link>
        <Outlet />
      </div>
    </div>
  );
}