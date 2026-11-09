"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ImageCarousel = ({ images = [], altText = "" }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  return (
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
  );
};
export default ImageCarousel;
