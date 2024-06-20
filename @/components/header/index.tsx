import { Link } from "@remix-run/react";
import { useState } from "react";

const EventLink = () => (
  <Link to={""}>
    <h1 className="text-emerald-900 max-w-48">
      Esdeveniment <span className="font-bold">Open Source Girona</span> 2024
    </h1>
  </Link>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emerald-700"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-emerald-100 px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <EventLink />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-emerald-700"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Tanca menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-emerald-500/10">
                <div className="space-y-2 py-6">
                  {/* <Link
                    to="/agenda"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-emerald-900 hover:bg-emerald-50"
                  >
                    Agenda
                  </Link>
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-emerald-900 hover:bg-emerald-50"
                  >
                    Ponents
                  </Link> */}
                  <Link
                    to="/"
                    className="-mx-3 block rounded-full bg-emerald-300 px-4 py-1.5 text-sm font-medium text-emerald-950 transition duration-300 hover:bg-emerald-300"
                  >
                    Inscriu-te
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <EventLink />
        </div>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          {/* <Link
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-900 hidden md:inline-block"
            to="/agenda"
          >
            Agenda
          </Link>
          <Link
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-900 hidden md:inline-block"
            to={""}
          >
            Ponents
          </Link> */}
          <a
            href="https://www.eventbrite.es/e/entradas-festa-opensource-girona-2023-geekscat-gdg-718595698077"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-emerald-950 transition duration-300 hover:bg-emerald-300 hidden md:inline-block"
          >
            Inscriu-te
          </a>
        </div>
      </div>
    </header>
  );
}
