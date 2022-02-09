import Image from "next/image";

import Jkflat from "../img/jkflat2.png";
import { ImArrowUpRight2 } from "react-icons/im";
import { SiDocker, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
export default function Janskapsalonflat() {
  return (
    <>
      <div className=" bg-pinklight group relative overflow-hidden rounded-3xl dark:bg-[#2F3763] sm:col-span-2">
        <div className=" bg-greenlight absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full dark:bg-[#8D5BE9] sm:translate-y-[-12.5rem] sm:rounded-t-none"></div>
        <div className="block translate-y-[-170px] select-none sm:translate-y-0">
          <Image src={Jkflat} alt="" />
        </div>
        <div className=" absolute bottom-4 left-4 flex h-8 w-8 items-center justify-end gap-2 rounded-full bg-white p-2 transition-all duration-300 ease-in group-hover:w-40 dark:bg-[#1F295B] dark:text-white">
          <ImArrowUpRight2 className="" />
          <a
            className=" group-hover:animate-fadeInRight absolute left-2 opacity-0 transition-all duration-200 hover:opacity-100 hover:delay-[250ms] group-hover:opacity-100 group-hover:delay-[250ms]"
            href="https://janskapsalon.nl"
            target={"_blank"}
            rel="noreferrer"
          >
            Janskapsalon.nl
          </a>
        </div>
      </div>
    </>
  );
}
