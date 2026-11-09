"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

export default function ImageCarousel({ images = [], altText = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative h-full">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={image.url}
                alt={image.alt || `${altText} - slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-0 flex h-full transform items-center px-2 text-white transition duration-400 hover:bg-black/40"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-0 right-0 flex h-full transform items-center px-2 text-white transition duration-400 hover:bg-black/40"
      >
        <ChevronRight size={30} />
      </button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-secondary-100/20 p-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Gå til bilete ${index + 1}`}
            className={`size-2.5 rounded-full ${
              index === selectedIndex ? "bg-white px-3" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
