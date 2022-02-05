import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="top-0 flex justify-center sm:absolute">
        <div className=" w-36 p-4 sm:m-4 ">
          <Image src={Logo} alt="" />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className=" m-12 flex w-min justify-center rounded-full bg-gray-200 font-medium">
          <div className=" m-2 w-min rounded-full">
            <div className="w-20 rounded-full bg-white p-1 text-center">
              <Link href="/">
                <a className=" w-20">Home</a>
              </Link>
            </div>
          </div>
          <div className=" m-2 w-min rounded-full">
            <div className=" w-20 rounded-full p-1 text-center">
              <Link href="/navbar">
                <a className=" w-20">About</a>
              </Link>
            </div>
          </div>
          <div className=" m-2 w-min rounded-full">
            <div className=" w-20 rounded-full p-1 text-center">
              <Link href="/navbar">
                <a className=" w-20">Projects</a>
              </Link>
            </div>
          </div>
          <div className=" m-2 w-min rounded-full">
            <div className=" w-20 rounded-full p-1 text-center">
              <Link href="/navbar">
                <a className=" w-20">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
