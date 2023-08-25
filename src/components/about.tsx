import Image from "next/image";
import { headers } from "next/headers";
import { getSanityData } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { aboutQuery } from "s/lib/queries";
import { AboutContent } from "@/types";
import { urlForImage } from "s/lib/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import SwitchColor from "./switchColor";

export default async function About() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  let currentPath = pathname.replace("/", "");
  if (currentPath === "") currentPath = "home";

  const components: PortableTextComponents = {
    marks: {
      strong: (props) => (
        <strong className="text-xl font-bold text-primary">
          {props.children}
        </strong>
      ),
      em: (props) => (
        <em className="mb-[-2px] text-3xl font-bold !not-italic text-primary">
          {props.children}
        </em>
      ),
    },
    block: {
      h6: (props) => <h6 className="px-4 text-lg">{props.children}</h6>,
    },
  };

  const params = {
    slug: currentPath,
  };

  let about = await getSanityData<SanityDocument<AboutContent>>(
    aboutQuery,
    ["about"],
    params
  );

  if (!about) {
    about = await getSanityData<SanityDocument<AboutContent>>(
      aboutQuery,
      ["about"],
      { slug: "not-found" }
    );
  }

  return (
    <div className="w-full flex-col items-center gap-2 sm:items-start">
      <div className="relative h-[120px] w-[175px] translate-x-[-20px] translate-y-[-25px]">
        <Image
          src={urlForImage(about.memojis.darkMemoji).url()}
          width={140}
          height={140}
          alt={about.memojis.darkMemoji.alt as string}
          className="absolute cursor-pointer opacity-0 transition-all duration-150 ease-in dark:opacity-100"
        />
        <Image
          src={urlForImage(about.memojis.lightMemoji).url()}
          width={140}
          height={140}
          alt={about.memojis.lightMemoji.alt as string}
          className="absolute cursor-pointer opacity-100 transition-all duration-150 ease-in dark:opacity-0"
        />
        <SwitchColor />
      </div>

      <div className="">
        {/* mobile */}
        <div className="flex flex-col items-baseline gap-2 sm:hidden">
          <PortableText value={about.text.mobileText} components={components} />
        </div>
        {/* large screens */}
        <div className="hidden flex-col items-baseline gap-2 sm:flex">
          <PortableText value={about.text.text} components={components} />
        </div>
      </div>
    </div>
  );
}
