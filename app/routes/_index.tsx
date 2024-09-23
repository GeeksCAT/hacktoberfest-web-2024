import {
  json,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { OpenSourceProject, open_source_projects } from "db/schema";

import ImageInfiniteCarousel from "@/components/image-infinite-carousel";
import AboutEvent from "@/components/about-event";
import { TracingBeam } from "@/components/tracing-beam";
import { HoverEffect } from "@/components/card-hover-effect";
import { Heading2 } from "@/components/headings/";

import { SponsorsList, SupporterList } from "@/components/sponsors-list";
import { useEffect, useState } from "react";
import BuyTicketsLink from "@/components/buy-tickets-btn";

export const meta: MetaFunction = () => {
  return [
    { title: "Festa Open Source Girona 2024" },
    {
      name: "description",
      content: "Festa Open Source Girona 2024",
    },
  ];
};

export const loader: LoaderFunction = async ({ context }) => {
  const env = context.cloudflare.env as Env;

  const db = drizzle(env.DB);
  const { results: latestProjects } = await db
    .select()
    .from(open_source_projects)
    .where(eq(open_source_projects.visible, 1))
    .limit(10)
    .run();

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
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <TracingBeam>
        <div className="pt-32">
          <div className="relative flex flex-col text-center font-bold md:text-8xl text-6xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-700 to-emerald-400">
            <span>Open Source</span>
            <span>Girona</span>{" "}
            <span>
              <span className="pretty">19/10/2024</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <BuyTicketsLink />
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
                <Heading2>Sobre Nosaltres</Heading2>
                <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                  L'associació <span className="year font-bold">Geeks.CAT</span>{" "}
                  és un grup de professionals, empreses i estudiants interessats
                  en el món de l'Open Source.
                </p>
                <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                  Organitzem esdeveniments per promoure l'Open Source a Girona
                </p>
              </div>

              <div className="max-w-64 md:max-w-96">
                <img src="/logo.png" alt="Open Source Girona" />
              </div>
            </div>

            <div className="mb-10 flex flex-col items-center justify-center">
              <Heading2 className="sm:text-5xl">
                Vols col·laborar fent una xerrada o taller?
              </Heading2>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSevX26lN5JGcmN7-YrcdxprShKhBg91ISHKfXU4-lPYIBvqIQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="mt-6"
              >
                <button className="inline-flex items-center bg-neutral-900 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-neutral-700 transition duration-200">
                  Envia'ns la teva proposta
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
                </button>
              </a>
            </div>

            <AboutEvent />

            <div className="mb-20">
              <h2 className="font-display text-5xl font-bold tracking-tighter text-emerald-500 sm:text-7xl">
                On serà?
              </h2>
              <div className="flex flex-col md:flex-row gap-5 mt-6">
                <div className="w-full">
                  <iframe
                    title="Casa de Cultura de Girona location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189921.19973057494!2d2.7239305!3d41.9461916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae6def75615a5%3A0x5ca81fd3c312edd4!2sCasa%20de%20Cultura%20de%20Girona!5e0!3m2!1ses!2ses!4v1726168992256!5m2!1ses!2ses"
                    className="w-full"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div>
                  <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                    Aquest cop ens reunirem a la <span className="pretty font-bold">Casa de Cultura de Girona</span>, 
                    a Pl. de l'Hospital, 6, 17002 Girona.
                  </p>
                  <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                    Ens trobatem a la 2a planta, que estara tota reservada per a l'esdeveniment.
                  </p>
                </div>
              </div>
            </div>

            <Heading2 className="text-2xl md:text-4xl md:leading-tight">
              Descobreix i comparteix
            </Heading2>

            <p className="mt-1 text-emerald-800">
              Vols fer visible alguna eina/app/llibreria OpenSource per
              compartir-la amb la comunitat?
            </p>
            <div className="mt-4 mb-4">
              <Link
                to="/add"
                replace={true}
                className="bg-neutral-900 relative z-10 w-fit hover:bg-neutral-700 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
              >
                Afegeix-la aquí
              </Link>
              <HoverEffect items={openSourceProjects}></HoverEffect>
            </div>

            <SupporterList />

            <SponsorsList />
          </div>
        </div>
      </TracingBeam>
      <Outlet />
    </div>
  );
}
