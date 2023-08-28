import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "@react-icons/all-files/im/ImArrowUpRight2";

export default function Janskapsalonflat() {
  return (
    <div className="group relative h-full w-full">
      <div className="absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-secondary sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block translate-y-[-170px] select-none sm:translate-y-0">
        <Image
          src="/images/jkflat.webp"
          alt="photo from the janskapsalon.nl website"
          width={3292}
          height={2002}
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-2 left-4 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-500 group-hover:w-[162px] ">
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-trans">
          <Link
            href="/projects/janskapsalon"
            passHref
            title="go to the jans kapsalon project page"
            className="flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-background p-2 text-text transition-all duration-500 group-hover:w-[162px] hover:w-[162px] "
          >
            <div className="flex items-center gap-2">
              <h1 className="translate-x-[-10px] opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Janskapsalon
              </h1>
              <ImArrowUpRight2 />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
