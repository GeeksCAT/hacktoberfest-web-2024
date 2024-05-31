import cx from "@/utilities/cx";

export interface ImageInfiniteCarouselProps {
  images: string[];
}

export default function ImageInfiniteCarousel({
  images,
}: ImageInfiniteCarouselProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-5 w-max animate-marquee [--duration:30s]">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={cx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl",
              index % 2 === 0 ? "-rotate-2" : "rotate-2"
            )}
          >
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
