import { AiOutlinePlus } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import {
  SiCss3,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";
import { BsCircle, BsPlusLg } from "react-icons/bs";
import { FaHome, FaMinus, FaPlus } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <div className="bg-bluelight relative overflow-hidden rounded-3xl transition-all duration-300 ease-in dark:bg-[#CE81C7] xl:col-span-2">
        <div className="bg-pinklight absolute h-[400px] w-[400px] translate-x-24 translate-y-24 rounded-full dark:bg-[#8D5BE9] "></div>
        <div className="absolute bottom-[1rem] left-14 text-4xl">
          <SiVisualstudiocode />
        </div>
        <div className="absolute bottom-[5.1rem] left-24 text-4xl">
          <SiReact />
        </div>
        <div className="absolute bottom-[11rem] left-[8.5rem] text-4xl">
          <SiHtml5 />
        </div>
        <div className="absolute bottom-[11rem] left-[11rem] text-4xl">
          <SiCss3 />
        </div>
        <div className="absolute bottom-[11rem] left-[13.5rem] text-4xl">
          <SiJavascript />
        </div>
        <div className="absolute bottom-[11rem] left-[16rem] text-4xl">
          <SiPhp />
        </div>
        <div className="absolute bottom-[11rem] left-[18.5rem] text-4xl">
          <GrMysql />
        </div>
      </div>
    </>
  );
}
