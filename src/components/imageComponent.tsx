import type { ReactElement } from "react";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

import { urlForImage } from "s/lib/image";
import { cn } from "@/utils/utils";

export const SanityImg = ({
  image,
  round,
  size,
  className,
  alt,
  loading,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  round?: number;
  size?: "small" | "medium" | "large";
  className?: string;
  alt?: string;
  loading?: "lazy" | "eager";
}): ReactElement => {
  const altText = alt ?? image?.alt ?? "";
  const dimensions = getImageDimensions(image);
  if (size === "small") {
    dimensions.width = 50;
    dimensions.height = 50;
  }
  if (size === "medium") {
    dimensions.width = 140;
    dimensions.height = 140;
  }
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        borderRadius: round ?? 0,
      }}
    >
      {image?.asset && (
        <Image
          src={urlForImage(image).url()}
          alt={altText}
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
      )}
    </div>
  );
};
