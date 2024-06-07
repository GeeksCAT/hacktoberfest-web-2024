import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Hacktoberfest Agenda" },
    {
      name: "description",
      content: "OpenSource Girona 2024 Agenda",
    },
  ];
};

export default function AgendaPage() {
  return (
    <div>
      <div className="mx-auto p-10 max-w-7xl">
        <div className="flex gap-5">
          <div className="grid grid-cols-4 gap-4 mt-10">
            { /* Places */ }
            <div className="text-center">
              <h2 className="text-md font-bold">Auditori</h2>
            </div>
            <div className="text-center">
              <h2 className="text-md font-bold">Aula 3</h2>
            </div>
            <div className="text-center">
              <h2 className="text-md font-bold">Aula 4</h2>
            </div>
            <div className="text-center">
              <h2 className="text-md font-bold">Aula d'Informàtica</h2>
            </div>

            {/* 9:00 */}
            <div className="col-span-4 relative">
              <div className="border-t-2 border-dashed border-teal-500" />
              <div className="absolute flex items-center gap-2 top-[40px] -left-[50px]">
                <h2>9:00</h2>
              </div>
            </div>

            <div className="bg-lime-200 p-4 rounded-lg shadow-md col-span-4">
              <h2 className="text-2xl font-bold">Obertura de portes</h2>
            </div>

            {/* 9:30 */}
            <div className="col-span-4 relative">
              <div className="border-t-2 border-dashed border-teal-500" />
              <div className="absolute flex items-center gap-2 top-[40px] -left-[50px]">
                <h2>9:00</h2>
              </div>
            </div>

            <div className="bg-lime-100 p-4 rounded-lg shadow-md col-span-1">
              <h2 className="text-2xl font-bold">Benvinguda</h2>
            </div>

            <div className="col-span-3" />

            {/* 10: 00 */}
            <div className="col-span-4 relative">
              <div className="border-t-2 border-dashed border-teal-500" />
              <div className="absolute flex items-center gap-2 top-[40px] -left-[55px]">
                <h2>10:00</h2>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-lime-100 p-4 rounded-lg shadow-md">
                <h2 className="text-md font-bold">
                  Connectant la teva aplicació amb la IA{" "}
                </h2>
              </div>

              <div className="bg-lime-100 p-4 rounded-lg shadow-md">
                <h2 className="text-md font-bold">
                  El món dels controladors leverless de hardware obert
                </h2>
              </div>
            </div>

            <div className="bg-lime-100 p-4 rounded-lg shadow-md">
              <h2 className="text-md font-bold">
                Taller per infants: Activitat desendollada{" "}
              </h2>
            </div>

            <div className="bg-lime-100 p-4 rounded-lg shadow-md">
              <h2 className="text-md font-bold">Introducció a Kubernetes </h2>
            </div>

            <div className="bg-lime-100 p-4 rounded-lg shadow-md">
              <h2 className="text-md font-bold">Marató PRs</h2>
            </div>

            {/* 11:00 */}
            <div className="col-span-4 relative">
              <div className="border-t-2 border-dashed border-teal-500" />
              <div className="absolute flex items-center gap-2 top-[40px] -left-[55px]">
                <h2>11:00</h2>
              </div>
              <div className="absolute flex items-center gap-2 bottom-[40px] -left-[55px]">
                <h2>10:30</h2>
              </div>
            </div>

            <div className="bg-lime-200 p-4 rounded-lg shadow-md col-span-4">
              <h2 className="text-2xl font-bold">Descans</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
