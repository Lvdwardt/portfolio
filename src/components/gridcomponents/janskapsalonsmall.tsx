import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
export default function Janskapsalonsmall() {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[2rem]">
      <div className=" absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-pg sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block w-[250] translate-y-[-80px] translate-x-[98px] select-none ">
        <Image
          src="/images/jk.webp"
          alt="photo from the janskapsalon.nl website"
          width={2002}
          height={3292}
        />
      </div>
      <div className=" absolute bottom-4 left-4 flex h-8 w-8 items-center justify-end gap-2 rounded-full bg-dw p-2 text-text transition-all duration-300 ease-in group-hover:w-40 ">
        <Link href="/projects/janskapsalon" passHref>
          <ImArrowUpRight2 className="" />
        </Link>
        <Link
          href="/projects/janskapsalon"
          className=" absolute left-2 opacity-0 transition-all duration-200 group-hover:animate-fadeInRight group-hover:opacity-100 group-hover:delay-[250ms] hover:opacity-100 hover:delay-[250ms]"
        >
          Janskapsalon
        </Link>
      </div>
    </div>
  );
}
