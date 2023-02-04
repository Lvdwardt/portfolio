import Image from "next/image";
import Link from "next/link";

import { ImArrowUpRight2 } from "react-icons/im";

export default function FlynImg() {
  return (
    <div className="group relative h-full w-full">
      <div className="absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-greenlight dark:bg-[#8D5BE9] sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block translate-y-[10px] select-none sm:translate-y-0">
        <Image
          src="/images/fly-n-pf.webp"
          alt="fly-n application photo"
          width={2002}
          height={3292}
          priority
          placeholder="blur"
          blurDataURL="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==)"
        />
      </div>
      <div className=" absolute bottom-4 left-4 flex h-8 w-8 items-center justify-end gap-2 rounded-full bg-white p-2 transition-all duration-300 ease-in group-hover:w-20 dark:bg-[#1F295B] dark:text-white">
        <Link href="/projects/fly-n" title="go to the fly-n project page">
          <ImArrowUpRight2 className="" />
        </Link>
        <Link
          href="/projects/fly-n"
          className=" absolute left-2 opacity-0 transition-all duration-200 group-hover:animate-fadeInRight group-hover:opacity-100 group-hover:delay-[250ms] hover:opacity-100 hover:delay-[250ms]"
        >
          Fly-n
        </Link>
      </div>
      <div className="text-white opacity-0 transition-all duration-700 dark:text-[#1F295B] sm:opacity-100 sm:group-hover:opacity-100 sm:hover:opacity-100" />
    </div>
  );
}
