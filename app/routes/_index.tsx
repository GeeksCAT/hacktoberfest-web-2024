import {
  json,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { drizzle } from 'drizzle-orm/d1';
import { OpenSourceProject, open_source_projects } from "db/schema";

import ImageInfiniteCarousel from "@/components/image-infinite-carousel";
import AboutEvent from "@/components/about-event";
import { TracingBeam } from "@/components/tracing-beam";
import { HoverEffect } from "@/components/card-hover-effect";
import { hash } from "@/lib/passwordHashing.server";
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

  const db = drizzle(env.DB);
  const { results: latestProjects} = await db.select().from(open_source_projects).limit(10).run();

  return json(latestProjects);
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

  const openSourceProjects = useLoaderData<OpenSourceProject[]>();

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

        <div className="relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-emerald-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
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
              <HoverEffect items={openSourceProjects}></HoverEffect>

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
        </div>
      </TracingBeam>
      <Outlet />
    </div>
  );
}
