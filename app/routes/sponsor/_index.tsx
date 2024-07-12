import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Hacktoberfest Patrocina" },
    {
      name: "description",
      content: "OpenSource Girona 2024 Patrocina",
    },
  ];
};

export default function SponsorPage() {
  return (
    <div className="mx-auto p-10 max-w-7xl flex flex-col items-center gap-16">
      <div className="relative flex flex-col text-center font-bold md:text-6xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-700 to-emerald-400">
        <span>Vols ajudar-nos a seguir</span>
        <span>fent créixer i difonent</span>{" "}
        <span>
          <span className="pretty"> l'Open Source?</span>
        </span>
      </div>

      <div className="flex gap-10 justify-center flex-col md:flex-row">
        <div className="flex-1">
          <img
            src="/images/event_4.jpg"
            alt="Patrocina"
            className="rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-start max-w-2xl font-bold text-3xl">
            Donaràs a conèixer la teva empresa entre els prop de{" "}
            <span className="pretty">120 assistents</span>, interessats en:
          </h2>

          <div className="grid grid-cols-1 gap-2">
            <h3 className="text-md font-semibold leading-6 text-slate-900">
              Intel·ligència Artificial
            </h3>
            <h3 className="text-md font-semibold leading-6 text-slate-900">
              Data Science
            </h3>
            <h3 className="text-md font-semibold leading-6 text-slate-900">
              DevOps
            </h3>
            <h3 className="text-md font-semibold leading-6 text-slate-900">
              Programació per mòbils i web: Flutter, Python, Javascript…
            </h3>
            <h3 className="text-md font-semibold leading-6 text-slate-900">
              Creació de videojocs
            </h3>
            <h3 className="text-md font-semibold leading-6 text-slate-900">
              … i molt més!
            </h3>
          </div>
        </div>
      </div>

      <h1 className="w-full font-bold text-3xl mt-10">
        Per <span className="pretty">250€</span> pots patrocinar la festa. Us
        <span className="pretty"> oferim:</span>
      </h1>

      <div className="mx-auto gap-8 grid md:gap-y-12 sm:grid-cols-2">
        <p className="font-bold text-xl text-emerald-700">
          Un post a les nostres xarxes socials (GeeksCAT, @PythonGirona)
          esmentant la vostra empresa.
        </p>
        <p className="font-bold text-xl text-emerald-700">
          El vostre logo + enllaç a la vostra web a la web de l’esdeveniment i
          el cartell
        </p>
        <p className="font-bold text-xl text-emerald-700">
          El vostre logo a les slides de l’esdeveniment i menció/agraïment al
          vostre suport durant la introducció de l'esdeveniment
        </p>
        <p className="font-bold text-xl text-emerald-700">
          Possibilitat de publicar una oferta de feina a la llista de correu
          dels assistents a l’esdeveniment
        </p>
        <p className="font-bold text-xl text-emerald-700">
          Possibilitat de ficar un rollup corporatiu a l’auditori i deixar
          stickers/fliers a l’espai de networking
        </p>
        <p className="font-bold text-xl text-emerald-700">
          Invitació a un sopar exclusiu amb ponents i organització, el dia
          anterior a l’esdeveniment.
        </p>
      </div>
    </div>
  );
}
