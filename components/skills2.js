import { AiOutlinePlus } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import {
  SiAzuredevops,
  SiCss3,
  SiDocker,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { BsCircle, BsPlusLg } from "react-icons/bs";
import { FaHome, FaMinus, FaPlus, FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <div className="bg-bluelight relative overflow-hidden rounded-3xl transition-all duration-300 ease-in dark:bg-[#CE81C7] dark:text-[#2F3763] xl:col-span-2">
        {/* <div className="bg-pinklight absolute h-[400px] w-[400px] translate-x-24 translate-y-24 rounded-full dark:bg-[#8D5BE9] "></div> */}
        {/* <div className="bg-pinklight absolute h-[200px] w-[200px] translate-x-16 translate-y-24 rounded-full dark:bg-[#8D5BE9] "></div> */}
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          id="blobSvg"
          className=" fill-pinklight dark:fill-[#8D5BE9] "
        >
          <path
            id="blob"
            d="M410,336.5Q388,423,294,445Q200,467,138,400.5Q76,334,91.5,257.5Q107,181,156.5,119.5Q206,58,277,93Q348,128,390,189Q432,250,410,336.5Z"
           />
          {/* <path
            id="blob"
            d="M430.5,315Q429,380,374,421Q319,462,254.5,448Q190,434,155.5,389Q121,344,87,297Q53,250,88,204Q123,158,159,120Q195,82,251.5,76Q308,70,352.5,106.5Q397,143,414.5,196.5Q432,250,430.5,315Z"
          ></path> */}
        </svg>

        {/* <div className="absolute bottom-[11rem] left-[2rem] text-4xl">
          <SiHtml5 />
        </div>
        <div className="absolute bottom-[11rem] left-[5.75rem] text-4xl">
          <SiCss3 />
        </div>
        <div className="absolute bottom-[11rem] left-[9.5rem] text-4xl">
          <SiJavascript />
        </div>
        <div className="absolute bottom-[11rem] left-[13.5rem] text-4xl">
          <SiDocker />
        </div>
        <div className="absolute bottom-[11rem] left-[20.5rem] text-4xl">
          <SiAzuredevops />
        </div>

        <div className="absolute bottom-[11rem] left-[17rem] text-4xl">
          <SiVisualstudiocode />
        </div>

        <div className="absolute bottom-[11rem] left-[26rem] text-4xl">
          <FaReact />
        </div>
        <div className="border-bluelight absolute bottom-[8rem] left-[22.8rem] flex h-20 w-20 items-center justify-center rounded-full border-8 text-4xl">
          <SiTailwindcss />
        </div>
        <div className="absolute bottom-[11rem] left-[22.5rem] text-4xl">
          <GrMysql />
        </div>*/}
      </div>
    </>
  );
}
