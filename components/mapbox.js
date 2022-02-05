import react, { useState } from "react";
import Image from "next/image";
import useDarkMode from "../hooks/useDarkMode";

import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle, BsPlusLg } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";

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
console.log(colorTheme)
  return (
    <>
      <div className="">
        <div className="aspect-square relative rounded-full">
          <div className="hidden dark:block">
            <Image
              src={Src(
                "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/5.5738,51.9337,0/180x180@2x?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew&attribution=false&logo=false"
              )}
              alt=""
              layout="fill"
              className="rounded-3xl relative"
            />
          </div>
          <div className="block dark:hidden">
            <Image
              src={Src(
                "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/5.5738,51.9337,0/180x180@2x?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew&attribution=false&logo=false"
              )}
              alt=""
              layout="fill"
              className="rounded-3xl relative"
            />
          </div>
          <div className="absolute rounded-full w-6 h-6 border-black dark:border-white border-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-white animate-pulse"></div>
          <div className="absolute rounded-full w-6 h-6 bg-white opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-white"></div>
          <div className="absolute rounded-full w-8 h-8 bg-white dark:bg-black bottom-4 left-4 dark:text-white flex justify-center items-center">
            <FaMinus />
          </div>
          <div className="absolute rounded-full w-8 h-8 bg-white dark:bg-black bottom-4 right-4 dark:text-white flex justify-center items-center">
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  );
}
