const BuyTicketsLink = () => {
  return (
    <a
      target="_blank"
      className="bg-neutral-900 text-white group relative z-[1] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold leading-[50%] ring-offset-background transition-all duration-100 after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-foreground after:transition-all after:duration-300 after:ease-out-fast hover:after:border-foreground hover:after:bg-foreground hover:after:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:after:bg-foreground active:after:scale-100 disabled:pointer-events-none disabled:opacity-50 text-background after:border-2 after:border-transparent hover:text-background active:text-background h-12 px-5 py-2"
      href="https://pretix.eu/geekscat/os24/"
      rel="noreferrer"
    >
      <span className="relative flex h-10 flex-col justify-center">
        <span className="inline-flex items-center relative transition-all duration-500 ease-out-fast translate-y-0 group-hover:opacity-0 group-hover:-translate-y-10">
          Entrades ja disponibles!
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="flex items-center justify-between w-full absolute opacity-0 transition-all duration-500 ease-out-fast translate-y-10 group-hover:opacity-100 group-hover:-translate-y-0">
            Aconsegueix la teva ara
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </span>
    </a>
  );
};

export default BuyTicketsLink;
