import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Whatsapp() {
  return (
    <Link
      className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-primary sm:order-9"
      href="https://wa.me/31630702130"
      target={"_blank"}
      rel="noreferrer"
      title="Whatsapp"
    >
      <FaWhatsapp className="text-[100px] text-white" />
    </Link>
  );
}
export function Linkedin() {
  return (
    <Link
      className="bg-bp relative flex items-center justify-center overflow-hidden rounded-[2rem] sm:order-10"
      href="https://www.linkedin.com/in/leonvandewardt/"
      target={"_blank"}
      rel="noreferrer"
      title="Linkedin"
    >
      <FaLinkedin className="text-[100px] text-white" />
    </Link>
  );
}

export function Github() {
  return (
    <Link
      className="relative flex h-full items-center justify-center bg-primary"
      href="https://github.com/Lvdwardt"
      target={"_blank"}
      rel="noreferrer"
      title="Github"
    >
      <FaGithub className="text-[100px] text-white" />
    </Link>
  );
}
export function Mail() {
  return (
    <Link
      className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-primary sm:order-12"
      href="mailto:contact@leonvandewardt.nl"
      target={"_blank"}
      rel="noreferrer"
      title="Mail"
    >
      <FaEnvelope className="text-[100px] text-white" />
    </Link>
  );
}
