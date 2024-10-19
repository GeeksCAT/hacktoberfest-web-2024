import cx from "@/utilities/cx";
import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hacktoberfest Agenda" },
    {
      name: "description",
      content: "OpenSource Girona 2024 Agenda",
    },
  ];
};

const MaratoPrs = () => (
  <div className="md:flex md:flex-col md:col-span-2 md:min-h-24 min-h-20 items-center justify-center rounded-lg bg-white">
    <div className="flex gap-3.5 pl-4 pt-4 md:hidden">
      <div className="flex h-auto min-w-[88px] items-center justify-center rounded-lg bg-[#FFE999] p-1 text-xs text-neutral-900">
        <p>Aula 5</p>
      </div>
    </div>
    <div className="px-4 pb-4">
      <div className="py-2">Marató PRs</div>
    </div>
  </div>
);

const Empty = () => (
  <div className="md:flex md:flex-col md:col-span-2 md:min-h-24 min-h-20 items-center justify-center rounded-lg bg-white">
    <div className="px-4 pb-4">
      <div className="py-2">-</div>
    </div>
  </div>
);

const Time = ({ time }: { time: string }) => (
  <div className="md:flex md:flex-col md:col-span-1 md:items-center md:justify-center md:rounded-lg md:bg-white">
    <div className="md:p-0 text-sm md:px-2 md:text-neutral-950">{time}</div>
  </div>
);

const SessionLink = ({
  to,
  children,
}: {
  to?: string;
  children: React.ReactNode;
}) => {
  if (to) {
    return (
      <Link to={to} className="cursor-pointer hover:underline">
        {children}
      </Link>
    );
  }
  return <>{children}</>;
};
const Session = ({
  to,
  tags,
  title,
  speaker,
  hiddenTags = false,
  extraTags,
  cols = 3,
}: {
  to?: string;
  cols?: number;
  tags?: string[];
  extraTags?: string[];
  hiddenTags?: boolean;
  title: string;
  speaker?: string;
}) => (
  <div className={`min-h-24 rounded-lg bg-white md:col-span-${cols}`}>
    <div
      className={cx(
        "flex gap-3.5 pl-4 pt-4 flex-wrap",
        hiddenTags && "md:hidden"
      )}
    >
      {tags?.map((tag) => (
        <div
          key={tag}
          className="flex h-auto min-w-[88px] items-center justify-center rounded-lg bg-[#65E0B8] p-1 text-xs text-neutral-900"
        >
          <p>{tag}</p>
        </div>
      ))}
      {extraTags?.map((tag) => (
        <div
          key={tag}
          className="flex h-auto min-w-[88px] items-center justify-center rounded-lg bg-[#FFE999] p-1 text-xs text-neutral-900"
        >
          <p>{tag}</p>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4">
      <div className="py-2">
        <SessionLink to={to}>
          <p className="text-base font-normal text-[#040404]">{title}</p>
          <p className="mt-1 text-xs font-normal text-[#040404]">{speaker}</p>
        </SessionLink>
      </div>
    </div>
  </div>
);

export default function AgendaPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-center p-4 md:p-8">
        <div className="flex w-full max-w-screen-xl flex-col gap-4">
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <div className="md:flex md:min-h-24 md:rounded-lg"></div>
            <div className="hidden md:col-span-3 md:flex md:flex-col md:items-center md:rounded-lg bg-[#65E0B8] md:min-h-24 md:justify-center">
              <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
                Aula 4
              </div>
            </div>
            <div className="hidden md:col-span-2 md:flex md:flex-col md:items-center md:rounded-lg bg-[#65E0B8] md:min-h-24 md:justify-center">
              <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
                Aula 6
              </div>
            </div>
            <div className="hidden md:col-span-2 md:flex md:flex-col md:items-center md:rounded-lg bg-[#65E0B8] md:min-h-24 md:justify-center">
              <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
                Aula 7
              </div>
            </div>
            <div className="hidden md:col-span-2 md:flex md:flex-col md:items-center md:rounded-lg bg-[#65E0B8] md:min-h-24 md:justify-center">
              <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
                Aula 5
              </div>
            </div>
          </div>
          {/* 9:30 ~ 10:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="9:30 ~ 10:00" />
            <div className="md:flex md:flex-col md:col-span-9 min-h-16 content-center justify-center rounded-lg bg-white">
              <div className="md:p-0 text-base flex justify-center text-neutral-950">
                Obertura de portes
              </div>
            </div>
          </div>
          {/* 10:00 ~ 10:30 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="10:00 ~ 10:30" />
            <Session tags={["Aula 4"]} title="Benvinguda + Què és l'OS" />
            <div className="md:flex md:flex-col md:col-span-6 md:min-h-24 min-h-20 items-center justify-center rounded-lg bg-white">
              <div className="flex flex-wrap gap-3.5 pl-4 pt-4 md:hidden">
                <div className="flex h-auto min-w-[88px] items-center justify-center rounded-lg bg-[#FFE999] p-1 text-xs text-neutral-900">
                  <p> Aula 6 </p>
                </div>
                <div className="flex h-auto min-w-[88px] items-center justify-center rounded-lg bg-[#FFE999] p-1 text-xs text-neutral-900">
                  <p> Aula 7 </p>
                </div>
                <div className="flex h-auto min-w-[88px] items-center justify-center rounded-lg bg-[#FFE999] p-1 text-xs text-neutral-900">
                  <p> Aula 6 </p>
                </div>
              </div>
              <div className="md:p-0 pb-4 pl-4 pt-2 text-neutral-950">-</div>
            </div>
          </div>
          {/* 10:30 ~ 11:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="10:30 ~ 11:00" />
            <Session
              to="/talk/que-es-un-internal-developer-platform"
              tags={["Aula 4"]}
              extraTags={["Docker", "Kubernetes", "Git"]}
              title="From DevOps to Platform Engineering"
              speaker="Joel Pérez Morales"
            />
            <Session
              to="/talk/home-assistant"
              tags={["Aula 6"]}
              extraTags={["Domòtica"]}
              title="Introducció a Home Assistant"
              cols={2}
            />
            <Empty />
            <MaratoPrs />
          </div>
          {/* 11:00 ~ 11:30 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="11:00 ~ 11:30" />
            <Session
              to="/talk/crea-formularis-etics-amb-liberaforms"
              tags={["Aula 4"]}
              extraTags={["Python", "Privadesa", "Sobirania", "GDPR", "Vue3"]}
              title="Crea formularis ètics amb LiberaForms"
              speaker="Andrés (Evilham)"
            />
            <Session
              to="/talk/home-assistant"
              tags={["Aula 6"]}
              extraTags={["Domòtica"]}
              title="Introducció a Home Assistant"
              cols={2}
            />
            <Empty />
            <MaratoPrs />
          </div>
          {/* 11:30 ~ 12:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="11:30 ~ 12:00" />
            <div className="md:flex md:flex-col md:col-span-9 min-h-16 content-center justify-center rounded-lg bg-white">
              <div className="md:p-0 text-base flex justify-center text-neutral-950">
                Descans
              </div>
            </div>
          </div>
          {/* 12:00 ~ 12:30 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="12:00 ~ 12:30" />
            <Session
              to="/talk/petitsuits"
              tags={["Aula 4"]}
              extraTags={["IA", "Python", "Django"]}
              title="PetitSuits"
              speaker="Laura Mora i Aubert"
            />
            <Session
              to="/talk/introduccio-al-motor-de-jocs-godot"
              tags={["Aula 6"]}
              extraTags={["Jocs", "Godot"]}
              title="Introducció al motor de jocs Godot"
              speaker="Ivan Reyne Ferrando"
              cols={2}
            />
            <Empty />
            <MaratoPrs />
          </div>
          {/* 12:30 ~ 13:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="12:30 ~ 13:00" />
            <Session
              to="/talk/how-the-rust-compiler-will-assist-you-in-catching-bugs"
              tags={["Aula 4"]}
              extraTags={["Rust", "Compiler", "Debug"]}
              title="How the Rust compiler will assist you in catching bugs"
              speaker="Ivan Fraixedes Cugat"
            />
            <Session
              to="/talk/introduccio-al-motor-de-jocs-godot"
              tags={["Aula 6"]}
              extraTags={["Jocs", "Godot"]}
              title="Introducció al motor de jocs Godot"
              speaker="Ivan Reyne Ferrando"
              cols={2}
            />
            <Empty />
            <MaratoPrs />
          </div>

          {/* 13:00 ~ 13:30 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="13:00 ~ 13:30" />
            <Session
              to="/talk/reactnative-con-accesibilidad-desde-el-inicio-para-que-nadie-se-quede-sin-tocar-tu-app"
              tags={["Aula 4"]}
              extraTags={[
                "Accessibilitat",
                "React-Native",
                "Aplicacions inclusives",
              ]}
              title="ReactNative con Accesibilidad desde el inicio: ¡Para que
                    nadie se quede sin tocar tu app!"
              speaker="Juanjo Montiel"
            />
            <Empty />
            <Empty />
            <MaratoPrs />
          </div>
          {/* 13:30 ~ 14:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="13:30 ~ 14:00" />
            <Session
              to="/talk/reactnative-con-accesibilidad-desde-el-inicio-para-que-nadie-se-quede-sin-tocar-tu-app"
              tags={["Aula 4"]}
              extraTags={[
                "Accessibilitat",
                "React-Native",
                "Aplicacions inclusives",
              ]}
              title="ReactNative con Accesibilidad desde el inicio: ¡Para que
                    nadie se quede sin tocar tu app!"
              speaker="Juanjo Montiel"
            />
            <Empty />
            <Empty />
            <MaratoPrs />
          </div>
          {/* 14:00 ~ 16:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="14:00 ~ 16:00" />
            <div className="md:flex md:flex-col md:col-span-9 min-h-16 content-center justify-center rounded-lg bg-white">
              <div className="md:p-0 text-base flex justify-center text-neutral-950">
                Dinar
              </div>
            </div>
          </div>
          {/* 16:00 ~ 16:30 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="16:00 ~ 16:30" />
            <Session
              to="/talk/glassnode-data-platform-journey"
              tags={["Aula 4"]}
              extraTags={["Blockchain", "Airflow", "DBT", "Solana"]}
              title="Glassnode Data Platform journey"
              speaker="Jordi P."
            />
            <Session
              to="/talk/rust-hacking-hour"
              tags={["Aula 6"]}
              extraTags={["Rust", "Exercicis", "Aprenentatge"]}
              title="Taller: Rust hacking hour"
              speaker="Ivan Fraixedes Cugat"
              cols={2}
            />
            <Session
              tags={["Aula 7"]}
              title="Taller Tecnològic: Crea el teu videojoc Arcade amb Micro:bit"
              cols={2}
            />
            <MaratoPrs />
          </div>
          {/* 16:30 ~ 17:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="16:30 ~ 17:00" />
            <Session
              to="/talk/model-de-negoci-amb-decidim"
              tags={["Aula 4"]}
              extraTags={["Ruby on Rails", "Monetitzar"]}
              title="Model de negoci amb Decidim"
              speaker="Oliver Valls"
            />
            <Session
              to="/talk/rust-hacking-hour"
              tags={["Aula 6"]}
              extraTags={["Rust", "Exercicis", "Aprenentatge"]}
              title="Taller: Rust hacking hour"
              speaker="Ivan Fraixedes Cugat"
              cols={2}
            />
            <Session
              tags={["Aula 7"]}
              title="Taller Tecnològic: Crea el teu videojoc Arcade amb Micro:bit"
              cols={2}
            />
            <MaratoPrs />
          </div>
          {/* 17:00 ~ 17:30 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="17:00 ~ 17:30" />
            <Session tags={["Aula 4"]} title="Lightning Talks" />
            <Empty />
            <Session
              tags={["Aula 7"]}
              title="Taller Tecnològic: Crea el teu videojoc Arcade amb Micro:bit"
              cols={2}
            />
            <MaratoPrs />
          </div>

          {/* 17:30 ~ 18:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="17:30 ~ 18:00" />
            <Session tags={["Aula 4"]} title="Cloenda" />
            <Empty />
            <Empty />
            <Empty />
          </div>

          {/* 18:00 */}
          <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
            <Time time="18:00" />
            <div className="md:flex md:flex-col md:col-span-9 min-h-16 content-center justify-center rounded-lg bg-white">
              <div className="md:p-0 text-base flex justify-center text-neutral-950">
                Tancament de portes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
