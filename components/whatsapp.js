import React from "react";
import { FaWhatsapp } from "react-icons/fa";

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
