import type { MetaFunction } from "@remix-run/cloudflare";
import ImageInfiniteCarousel from "@/components/image-infinite-carousel";

export const meta: MetaFunction = () => {
  return [
    { title: "Hacktoberfest" },
    {
      name: "description",
      content: "OpenSource Girona 2024",
    },
  ];
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

  return (
    <>
      <div className="pt-32">
        <div className="relative flex flex-col text-center font-bold md:text-8xl text-6xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-700 to-emerald-400">
          <span>Open Source</span>
          <span>Girona</span>{" "}
          <span>
            <span className="year">2024</span>
          </span>
        </div>
      </div>

      <div className="pt-6 pt-32 sm:pt-32">
        <ImageInfiniteCarousel images={images} />
      </div>

      <div className="h-[500px]" />
    </>
  );
}
