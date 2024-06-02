"use client";

import { SanityImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlForImage } from "s/lib/image";
import { Image as ImageType } from "sanity";
import GifOverlay from "./gifOverlay";
import { useState } from "react";

export const GifImage = ({
  imageClassName,
  altText,
  dimensions,
  url,
  image,
  loading,
}: {
  image: ImageType;
  round?: number;
  size?: "small" | "medium" | "large";
  className?: string;
  imageClassName?: string;
  dimensions: SanityImageDimensions;
  url: string;
  altText?: string;
  loading?: "lazy" | "eager";
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <GifOverlay isLoading={isLoading} />
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
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </>
  );
};
