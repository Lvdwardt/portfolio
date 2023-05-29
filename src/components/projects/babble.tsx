import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Babble() {
  return (
    <div className=" flex h-full w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/companies/babble.webp"
        alt="Babble"
        height={90}
        width={90}
        className="rounded-3xl"
      />
      <div className="absolute bottom-2 left-4 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-500 group-hover:w-[97px] ">
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-trans">
          <Link
            href="/projects/babble"
            passHref
            title="go to the babble project page"
            className="flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-background p-2 text-text transition-all duration-500 group-hover:w-[97px] hover:w-[97px] "
          >
            <div className="flex items-center gap-2">
              <h1 className="translate-x-[-10px] opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Babble
              </h1>
              <ImArrowUpRight2 />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
