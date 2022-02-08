import React from "react";
import { FaDiscord, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <>
      <a
        className=" bg-greenlight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#8D5BE9]"
        href="https://api.whatsapp.com/send?phone=31630702130"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaWhatsapp className="text-[100px] text-white" />
      </a>
    </>
  );
}
export function Github() {
  return (
    <>
      <a
        className=" bg-bluelight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#CE81C7]"
        href="https://github.com/Lvdwardt"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaGithub className="text-[100px] text-white" />
      </a>
    </>
  );
}
export function Discord() {
  return (
    <>
      <a
        className=" bg-bluelight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#CE81C7]"
        href="https://github.com/Lvdwardt"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaDiscord className="text-[100px] text-white" />
      </a>
    </>
  );
}
