import Image from "next/image";
import Link from "next/link";

import { ImArrowUpRight2 } from "react-icons/im";

export default function FlynImg() {
  return (
    <div className="group relative h-full w-full">
      <div className="absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-pg sm:translate-y-[-12.5rem] sm:rounded-t-none" />
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
      <div className="absolute bottom-2 left-4 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-500 group-hover:w-[90px] ">
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-white/20">
          <div className="flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-dw p-2 text-text transition-all duration-500 group-hover:w-[90px] hover:w-[90px] ">
            <Link
              href="/projects/fly-n"
              passHref
              title="go to the jans kapsalon project page"
              className="flex items-center gap-2"
            >
              <h1 className="translate-x-[-10px] whitespace-nowrap opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Fly-n
              </h1>
              <ImArrowUpRight2 />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
