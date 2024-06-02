import type { ReactElement } from "react";
import { SanityImageSource, getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

import { urlForImage } from "s/lib/image";
import { cn } from "@/utils/utils";
import { Image as ImageType } from "sanity";
import { GifImage } from "./gif/gifComponent";

export const SanityImg = ({
  image,
  round,
  size,
  className,
  imageClassName,
  alt,
  loading,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: ImageType;
  round?: number;
  size?: "small" | "medium" | "large";
  className?: string;
  imageClassName?: string;
  alt?: string;
  loading?: "lazy" | "eager";
}): ReactElement => {
  const altText = alt ?? image?.alt ?? "";
  const dimensions = getImageDimensions(image as SanityImageSource);
  if (size === "small") {
    dimensions.width = 50;
    dimensions.height = 50;
  }
  if (size === "medium") {
    dimensions.width = 140;
    dimensions.height = 140;
  }

  const url = urlForImage(image).url();

  const isGif = url?.includes(".gif");

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        borderRadius: round ?? 0,
      }}
    >
      {image?.asset &&
        (isGif ? (
          <GifImage
            imageClassName={imageClassName}
            altText={altText as string}
            dimensions={dimensions}
            url={url}
            image={image}
            loading={loading}
          />
        ) : (
          <Image
            className={imageClassName}
            src={url}
            alt={altText as string}
            width={dimensions.width}
            height={dimensions.height}
            placeholder="blur"
            loading={loading ?? "lazy"}
            blurDataURL={urlForImage(image).width(24).height(24).blur(10).url()}
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              40vw"
          />
        ))}
    </div>
  );
};
