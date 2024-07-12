import { useState } from "react";

export default function AboutEvent() {
  const eventThings = [
    {
      title: "Xerrades i tallers",
      description:
        "Aprendràs de la mà d'experts del món de l'Open Source. Descobriràs noves eines per implementar a la teva empresa o activitat",
      image: "/images/event_8.jpg",
    },
    {
      title: "Marató de PRs",
      description:
        "Col·labora amb l'Open Source sigui quin sigui el teu nivell. Pensa en dur el teu portàtil!",
      image: "/images/event_10.jpg",
    },
    {
      title: "Lightning talks",
      description:
        "Si vols compartir alguna cosa amb la resta podràs fer-ho en una lightning talk.",
      image: "/images/event_9.jpg",
    },
  ];

  const [currentThing, setCurrentThing] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center relative mb-20 w-full">
      <div className="flex md:flex-row flex-col gap-5 w-full  relative">
        <div>
          <h2 className="font-display text-5xl font-bold tracking-tighter text-emerald-500 sm:text-7xl">
            Què farem?
          </h2>

          <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            Ens reunirem en una trobada presencial a Girona el dissabte 19/10/2024 a Girona.
          </p>

          <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            Començarem a les 9:30h i finalitzarem a les 19h, amb una pausa per dinar. 
          </p>

          <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            Gaudirem junts d'una jornada amb moltes activitats: xerrades, tallers per a tots els nivells i perfils, 
            lightning talks, marató de PRS i molt més!
          </p>
        </div>

        <div>
          { /* TODO: afegit link per inscriu-te */}
        </div>

      </div>





      <div className="mx-auto mb-10 mt-20 grid max-w-5xl items-start gap-3 lg:grid-cols-3">
        {eventThings.map((thing, index) => (
          <button
            key={index}
            className="flex flex-col justify-start h-full rounded-lg border-2 p-4 transition duration-200 hover:bg-emerald-200 border-emerald-300"
            onMouseEnter={() => setCurrentThing(index)}
          >
            <h3 className="mb-4 text-left text-xl font-semibold tracking-wide text-emerald-600 lg:text-2xl">
              {thing.title}
            </h3>
            <p className="text-left text-sm text-emerald-800 lg:text-base">
              {thing.description}
            </p>
          </button>
        ))}
      </div>

      <div className="image-container mx-auto max-w-4xl transform rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-500 p-1">
        <img
          src={eventThings[currentThing].image}
          alt="event"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
