import Image from "next/image";
import Link from "next/link";

import Jkflat from "../img/jkflat2.png";
import { ImArrowUpRight2 } from "react-icons/im";
import { SiDocker, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
export default function Janskapsalonflat() {
  return (
    <div className="group relative hidden overflow-hidden rounded-3xl bg-pinklight dark:bg-[#2F3763] sm:order-4 sm:col-span-2 sm:block xl:order-10">
      <div className=" absolute h-[500px] w-[500px] overflow-hidden rounded-full bg-greenlight translate-x-12 translate-y-8 dark:bg-[#8D5BE9] sm:translate-y-[-12.5rem] sm:rounded-t-none"></div>
      <div className="block translate-y-[-170px] select-none sm:translate-y-0">
        <Image src={Jkflat} alt="photo from the janskapsalon.nl website" />
      </div>
      <div className=" absolute bottom-4 left-4 flex h-8 w-8 items-center justify-end gap-2 rounded-full bg-white p-2 transition-all duration-300 ease-in group-hover:w-40 dark:bg-[#1F295B] dark:text-white">
        <Link href="/janskapsalon" passHref={true}>
          <ImArrowUpRight2 className="" />
        </Link>
        <Link href="/janskapsalon" passHref={true}>
          <a className=" absolute left-2 opacity-0 transition-all duration-200 hover:opacity-100 hover:delay-[250ms] group-hover:animate-fadeInRight group-hover:opacity-100 group-hover:delay-[250ms]">
            Janskapsalon
          </a>
        </Link>
      </div>
    </div>
  );
}
