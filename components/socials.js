import React from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      className="  bg-greenlight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#CE81C7] sm:order-9"
      href="https://api.whatsapp.com/send?phone=31630702130"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaWhatsapp className="text-[100px] text-white" />
    </a>
  );
}
export function Github() {
  return (
    <a
      className=" bg-bluelight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#CE81C7] sm:order-8 xl:order-5"
      href="https://github.com/Lvdwardt"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaGithub className="text-[100px] text-white" />
    </a>
  );
}
export function Discord() {
  return (
    <a
      className=" bg-greenlight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#CE81C7] sm:order-5 xl:order-8"
      href="https://github.com/Lvdwardt"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaDiscord className="text-[100px] text-white" />
    </a>
  );
}
export function Mail() {
  return (
    <a
      className=" bg-bluelight relative flex items-center justify-center overflow-hidden rounded-3xl dark:bg-[#8D5BE9] sm:order-12"
      href="mailto:contact@leonvandewardt.nl"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaEnvelope className="text-[100px] text-white" />
    </a>
  );
}
