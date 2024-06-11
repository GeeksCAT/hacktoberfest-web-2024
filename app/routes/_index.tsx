import {
  json,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/cloudflare";
import ImageInfiniteCarousel from "@/components/image-infinite-carousel";
import AboutEvent from "@/components/about-event";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hacktoberfest" },
    {
      name: "description",
      content: "OpenSource Girona 2024",
    },
  ];
};

export const loader: LoaderFunction = async ({ context }) => {
  const env = context.cloudflare.env as Env;

  const { results } = await env.DB.prepare(
    "SELECT * FROM open_source_projects LIMIT 5"
  ).all();
  return json(results);
};

export default function Index() {
  const images = [
    "/images/event_1.jpg",
    "/images/event_2.jpg",
    "/images/event_3.jpg",
    "/images/event_4.jpg",
    "/images/event_5.jpg",
    "/images/event_6.jpg",
    "/images/event_7.jpg",
  ];

  const openSourceProjects = useLoaderData<typeof loader>();

  return (
    <>
      <div className="pt-32">
        <div className="relative flex flex-col text-center font-bold md:text-8xl text-6xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-700 to-emerald-400">
          <span>Open Source</span>
          <span>Girona</span>{" "}
          <span>
            <span className="year">21/10/2024</span>
          </span>
        </div>
      </div>

      <div className="pt-6 pt-32 sm:pt-32">
        <ImageInfiniteCarousel images={images} />
      </div>

      <div className="relative w-full my-6">
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <div className="absolute -right-8 bottom-0 -left-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        </div>

        <div className="absolute bottom-0 right-48 flex h-8 items-end overflow-hidden">
          <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div>
      </div>

      <div className="mt-20 mx-auto p-10 max-w-7xl">
        <div className="flex md:flex-row flex-col gap-5 items-center justify-center mb-10">
          <div className="relative flex flex-col">
            <h2 className="font-display text-5xl font-bold tracking-tighter text-emerald-500 sm:text-7xl">
              Sobre Nosaltres
            </h2>
            <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
              Som un grup de persones interessades en el món de l'Open Source de
              l'associació <span className="year font-bold">GeeksCAT</span> que
              organitzem esdeveniments per promoure la cultura de l'Open Source
              a Girona.
            </p>
          </div>

          <div className="max-w-64 md:max-w-96">
            <img src="/logo.png" alt="Open Source Girona" />
          </div>
        </div>

        <h1 className="text-3xl font-bold">Vols fer visible alguna eina/app/blibioteca open source per compartir-la amb la comunitat?</h1>
        <div className="mt-4">
          <Link
            to="/add"
            replace={true}
            className="underline text-purple-600 hover:text-purple-700"
          >
            Afegeix-la aquí
          </Link>
          <div>
            {
              openSourceProjects.map((project) => (
                <div key={project.id}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <a href={project.website}>{project.website}</a>
                </div>
              ))
            }
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative mb-20 w-full">
          <h2 className="font-display text-5xl font-bold tracking-tighter text-emerald-500 sm:text-7xl">
            Agenda
          </h2>

          <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            Properament publicarem la agenda de l'esdeveniment.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center relative mb-20 w-full">
          <h2 className="font-display text-5xl font-bold tracking-tighter text-emerald-500 sm:text-7xl">
            Ponents
          </h2>

          <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            Properament publicarem la llista de ponents.
          </p>
        </div>

        {/* Sponsorship */}

        <div className="flex flex-col items-center justify-center relative mb-20 w-full">
          <h2 className="font-display text-5xl font-bold tracking-tighter text-emerald-500 sm:text-7xl">
            Patrocinadors
          </h2>

          <div className="mt-10 grid max-w-max grid-cols-2 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center md:w-32 w-24"
              >
                <img src="/logo.png" alt="sponsor" />
              </div>
            ))}
          </div>
        </div>

        <AboutEvent />
      </div>
      <Outlet />
    </>
  );
}
