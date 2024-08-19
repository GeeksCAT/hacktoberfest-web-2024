import { Heading2 } from "../headings";

export interface EventSponsor {
  logo: string;
  name: string;
  web: string;
}

export const supportersList: EventSponsor[] = [
  {
    logo: "sponsors/ajuntamentGirona.png",
    name: "Som Energia",
    web: "https://www.somenergia.coop/es/",
  },
  {
    logo: "sponsors/assoc-catosfera-logo-2019.png",
    name: "Som Energia",
    web: "https://www.somenergia.coop/es/",
  },
];

export const sponsorsList: EventSponsor[] = [
  {
    logo: "sponsors/logo_som_energia.svg",
    name: "Som Energia",
    web: "https://www.somenergia.coop/es/",
  },
  {
    logo: "sponsors/kave_home.png",
    name: "Kave Home",
    web: "https://kavehome.com/es/ca/",
  },
  {
    logo: "sponsors/Nagarro_Horizontal_Light.svg",
    name: "APSL",
    web: "https://apsl.tech/es/",
  },
  //   {
  //     logo: "logo_som_energia.svg",
  //     name: "Som Energia",
  //     web: "https://www.somenergia.coop/es/",
  //   },
  //   {
  //     logo: "gisce.png",
  //     name: "GISCE",
  //     web: "https://gisce.net/es/",
  //   },
  //   {
  //     logo: "fundcraft.png",
  //     name: "FundCraft",
  //     web: "https://www.fundcraft.lu/",
  //   },
  //   {
  //     logo: "photopills.png",
  //     name: "PhotoPills",
  //     web: "https://www.photopills.com/es",
  //   },
  //   {
  //     logo: "clouding.png",
  //     name: "Clouding",
  //     web: "https://clouding.io/",
  //   },
  //   {
  //     logo: "dobleseo.png",
  //     name: "Dobleseo",
  //     web: "https://dobleseo.pro",
  //   },
];

const supportersGridCols = {
  sm: Math.min(supportersList.length, 3),
  xl: Math.min(supportersList.length, 6),
};
const sponsorsGridCols = {
  sm: Math.min(sponsorsList.length, 3),
  xl: Math.min(sponsorsList.length, 6),
};

export function SponsorsLister({
  sponsorType,
}: {
  sponsorType: "supporter" | "sponsor";
  }) {
  
  const isSupporter = sponsorType === "supporter";
  const entriesList = isSupporter ? supportersList : sponsorsList;
  const title = isSupporter ? "Amb el suport de" : "Amb el patrocini de";
  const gridCols = isSupporter ? supportersGridCols : sponsorsGridCols;

  return (
    <div className="my-20">
      <Heading2>{title}</Heading2>

      <div
        className={`mt-10 items-center justify-center grid gap-5 grid-cols-1 sm:gap-10 sm:grid-cols-${gridCols.sm} xl:grid-cols-${gridCols.xl}`}
      >
        {entriesList.map((_sponsor) => (
          <div className="">
            <a
              href={_sponsor.web}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center"
              title={_sponsor.name}
            >
              <img
                src={_sponsor.logo}
                alt={_sponsor.name}
                className="max-w-52 block mx-auto"
              />
              {/* { _sponsor.name } */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SponsorsList() {
  return SponsorsLister({ sponsorType: "sponsor" });
}

export function SupporterList() {
  return SponsorsLister({ sponsorType: "supporter" });
}
