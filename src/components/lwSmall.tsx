import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";
export default function LwSmall() {
  return (
    <div className=" group relative overflow-hidden rounded-[2rem] bg-br sm:order-7 sm:row-span-2 xl:order-3 xl:col-start-4 xl:row-start-1">
      <div className=" absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-pg sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block translate-y-[10px] select-none sm:translate-y-[-96px]">
        <Image
          src="/images/lw.webp"
          alt="photo from the janskapsalon.nl website"
          width={2002}
          height={3292}
        />
      </div>
      <div className=" bg-bg absolute bottom-4 left-4 flex h-8 w-8 items-center justify-end gap-2 rounded-full bg-white p-2 text-text transition-all duration-300 ease-in group-hover:w-40">
        <ImArrowUpRight2 className="" />
        <Link
          className=" absolute left-2 opacity-0 transition-all duration-200 group-hover:animate-fadeInRight group-hover:opacity-100 group-hover:delay-[250ms] hover:opacity-100 hover:delay-[250ms]"
          href="https:///janskapsalon.vercel.app/"
          target={"_blank"}
          rel="noreferrer"
        >
          Janskapsalon.nl
        </Link>
      </div>
      <div className="text-dw opacity-0 transition-all duration-700 sm:opacity-100 sm:group-hover:opacity-100 sm:hover:opacity-100" />
    </div>
  );
}
