import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    //divider
    <footer className="w-full py-4">
      <div className="w-full px-20">
        <div className="h-0.5 bg-emerald-300" />
      </div>

      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <a
            href="https://geekscat.org"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-bold text-emerald-600 hover:text-emerald-900 flex items-center gap-2"
          >
            geekscat.org
            <svg
              width="0.5625rem"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-900"
            to={""}
          >
            Agenda
          </Link>
          <Link
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-900"
            to={""}
          >
            Ponents
          </Link>

          <a
            href="https://twitter.com/Geeks_CAT"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-emerald-600 hover:text-emerald-900"
              aria-hidden="true"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
