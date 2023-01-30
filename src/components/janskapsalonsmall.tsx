import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
export default function Janskapsalonsmall() {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-pinklight dark:bg-[#2F3763] sm:hidden">
      <div className=" absolute h-[500px] w-[500px] overflow-hidden rounded-full bg-greenlight translate-x-12 translate-y-8 dark:bg-[#8D5BE9] sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block w-[250] translate-y-[-80px] translate-x-[98px] select-none ">
        <Image
          src="/img/jk.png"
          alt="photo from the janskapsalon.nl website"
          width={200}
          height={329}
        />
      </div>
      <div className=" absolute bottom-4 left-4 flex h-8 w-8 items-center justify-end gap-2 rounded-full bg-white p-2 transition-all duration-300 ease-in group-hover:w-40 dark:bg-[#1F295B] dark:text-white">
        <Link href="/janskapsalon" passHref>
          <ImArrowUpRight2 className="" />
        </Link>
        <Link
          href="/janskapsalon"
          className=" absolute left-2 opacity-0 transition-all duration-200 hover:opacity-100 hover:delay-[250ms] group-hover:animate-fadeInRight group-hover:opacity-100 group-hover:delay-[250ms]"
        >
          Janskapsalon
        </Link>
      </div>
    </div>
  );
}
