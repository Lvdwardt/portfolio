import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="top-0 flex justify-center  xl:justify-start">
        <div className=" w-36 p-4 sm:m-4 ">
          <Image src={Logo} alt="" />
        </div>
      </div>
    </>
  );
}
