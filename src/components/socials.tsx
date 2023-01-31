import React from "react";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

export function Whatsapp() {
  return (
    <Link
      className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-greenlight dark:bg-[#8D5BE9] sm:order-9 sm:dark:bg-[#CE81C7]"
      href="https://api.whatsapp.com/send?phone=31630702130"
      target={"_blank"}
      rel="noreferrer"
      title="Whatsapp"
    >
      <FaWhatsapp className="text-[100px] text-white" />
    </Link>
  );
}
export function Github() {
  return (
    <Link
      className=" relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-bluelight dark:bg-[#CE81C7] sm:order-8 xl:order-5"
      href="https://github.com/Lvdwardt"
      target={"_blank"}
      rel="noreferrer"
      title="Github"
    >
      <FaGithub className="text-[100px] text-white" />
    </Link>
  );
}
export function Discord() {
  return (
    <Link
      className=" relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-greenlight dark:bg-[#CE81C7] sm:order-5 xl:order-8"
      href="https://discord.com/users/396931979020337153"
      target={"_blank"}
      rel="noreferrer"
      title="Discord"
    >
      <FaDiscord className="text-[100px] text-white" />
    </Link>
  );
}
export function Mail() {
  return (
    <Link
      className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-greenlight dark:bg-[#CE81C7] sm:order-12 sm:bg-bluelight sm:dark:bg-[#8D5BE9]"
      href="mailto:contact@leonvandewardt.nl"
      target={"_blank"}
      rel="noreferrer"
      title="Mail"
    >
      <FaEnvelope className="text-[100px] text-white" />
    </Link>
  );
}
