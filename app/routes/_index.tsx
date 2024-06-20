import {
  json,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/cloudflare";
import ImageInfiniteCarousel from "@/components/image-infinite-carousel";
import AboutEvent from "@/components/about-event";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

type SharedProject = {
  id: number;
  name: string;
  description: string;
  website: string;
};
import { TracingBeam } from "@/components/tracing-beam";
// import Button from "@/components/button";

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

  const openSourceProjects = useLoaderData<SharedProject[]>();

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <TracingBeam>
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
                Som un grup de persones interessades en el món de l'Open Source
                de l'associació <span className="year font-bold">GeeksCAT</span>{" "}
                que organitzem esdeveniments per promoure la cultura de l'Open
                Source a Girona.
              </p>
            </div>

            <div className="max-w-64 md:max-w-96">
              <img src="/logo.png" alt="Open Source Girona" />
            </div>
          </div>

          <h2 className="text-emerald-600 font-semibold text-2xl md:text-4xl md:leading-tight">
            Descobreix i comparteix
          </h2>

          <p className="mt-1 text-emerald-800">
            Vols fer visible alguna eina/app/blibioteca open source per
            compartir-la amb la comunitat?
          </p>
          <div className="mt-4 mb-4">
            <Link
              to="/add"
              replace={true}
              className="bg-neutral-900 relative z-10 w-fit hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
            >
              Afegeix-la aquí
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
              {openSourceProjects.map((project) => (
                <figure
                  className="rounded-3xl bg-white border p-4 relative overflow-hidden"
                  key={project.id}
                >
                  <div
                    aria-hidden="true"
                    className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-teal-500 to-white blur-2xl opacity-25"
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="font-medium text-gray-950">
                      {project.name}
                    </h3>
                    <p className="text-base text-muted mt-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 py-4">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                    >
                      <span>Link</span>
                    </a>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* <div className="flex mb-16">
            <div className="flex-1">
              <h2 className="text-emerald-600 font-semibold text-2xl md:text-4xl md:leading-tight">Busquem patrocinadors pel millor event Open Source de Girona</h2>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <Button>Contacta'ns</Button>
            </div>
          </div> */}




          <AboutEvent />
        </div>
      </TracingBeam>
      <Outlet />
    </div>
  );
}
