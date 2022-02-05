import react, { useState } from "react";
import Image from "next/image";
import useDarkMode from "../hooks/useDarkMode";

import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle, BsPlusLg } from "react-icons/bs";
import { FaHome, FaMinus, FaPlus } from "react-icons/fa";

//   return "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/5.5738,51.9337,0/180x180@2x?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew&attribution=false&logo=false";
// } else if (colorTheme !== "light") {

//     return"https://api.mapbox.com/styles/v1/mapbox/light-v10/static/5.5738,51.9337,0/180x180@2x?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew&attribution=false&logo=false";
// }

function Src(str) {
  var mapSource = str;
  var a = mapSource.substr(0, mapSource.indexOf(",0"));
  var b = mapSource.substr(mapSource.indexOf(",0") + 1);
  var c = ",";
  var zoomlevel = 10;
  var imgSrc = a + c + zoomlevel + c + b;
  return imgSrc;
}
function SrcLight(str) {
  var mapSource = str;
  var a = mapSource.substr(0, mapSource.indexOf(",0"));
  var b = mapSource.substr(mapSource.indexOf(",0") + 1);
  var c = ",";
  var zoomlevel = 10;
  var imgSrc = a + c + zoomlevel + c + b;
  return imgSrc;
}

export default function Mapbox() {
  const [colorTheme, setTheme] = useDarkMode();
  console.log(colorTheme);
  return (
    <>
      <div className="">
        <div className="relative h-full rounded-full">
          <div className="hidden dark:block">
            <Image
              src={Src(
                "https://api.mapbox.com/styles/v1/leonvdw/ckza3leh5002g14qhbxatpdjt/static/5.5738,51.9337,0/180x180@2x?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew&attribution=false&logo=false"
              )}
              alt=""
              layout="fill"
              className="relative rounded-3xl"
            />
          </div>
          <div className="block dark:hidden">
            <Image
              src={Src(
                "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/5.5738,51.9337,0/180x180@2x?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew&attribution=false&logo=false"
              )}
              alt=""
              layout="fill"
              className="relative rounded-3xl"
            />
          </div>
          <div className="-translate-y-1/5 absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 transform justify-center rounded-full opacity-70 dark:text-white">
            <FaHome className="text-[40px] text-white" />
          </div>
          <div className="absolute bottom-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#1F295B] dark:text-white">
            <FaMinus />
          </div>
          <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#1F295B] dark:text-white">
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  );
}
