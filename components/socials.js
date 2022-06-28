import React from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      className="  relative flex items-center justify-center overflow-hidden rounded-3xl bg-greenlight dark:bg-[#8D5BE9] sm:order-9 sm:dark:bg-[#CE81C7]"
      href="https://api.whatsapp.com/send?phone=31630702130"
      target={"_blank"}
    >
      <FaWhatsapp className="text-[100px] text-white" />
    </a>
  );
}
export function Github() {
  return (
    <a
      className=" relative flex items-center justify-center overflow-hidden rounded-3xl bg-bluelight dark:bg-[#CE81C7] sm:order-8 xl:order-5"
      href="https://github.com/Lvdwardt"
      target={"_blank"}
    >
      <FaGithub className="text-[100px] text-white" />
    </a>
  );
}
export function Discord() {
  return (
    <a
      className=" relative flex items-center justify-center overflow-hidden rounded-3xl bg-greenlight dark:bg-[#CE81C7] sm:order-5 xl:order-8"
      href="https://discord.com/users/396931979020337153"
      target={"_blank"}
    >
      <FaDiscord className="text-[100px] text-white" />
    </a>
  );
}
export function Mail() {
  return (
    <a
      className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-greenlight dark:bg-[#CE81C7] sm:order-12 sm:bg-bluelight sm:dark:bg-[#8D5BE9]"
      href="mailto:contact@leonvandewardt.nl"
      target={"_blank"}
    >
      <FaEnvelope className="text-[100px] text-white" />
    </a>
  );
}
