import Image from "next/image";
import Logo from "../public/logo.png";

export default function Navbar() {
  return (
    <>
          <div className="sm:absolute top-0 flex justify-center">
        <div className=" w-36 p-4 sm:m-4 ">
          <Image src={Logo} alt="" />
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className=" bg-gray-200 rounded-full flex justify-center w-min font-medium m-12">
          <div className=" w-min m-2 rounded-full">
            <div className="bg-white rounded-full w-20 text-center p-1">
              <a href="/" className=" w-20">
                Home
              </a>
            </div>
          </div>
          <div className=" w-min m-2 rounded-full">
            <div className=" rounded-full w-20 text-center p-1">
              <a href="/navbar" className=" w-20">
                About
              </a>
            </div>
          </div>
          <div className=" w-min m-2 rounded-full">
            <div className=" rounded-full w-20 text-center p-1">
              <a href="/navbar" className=" w-20">
                Projects
              </a>
            </div>
          </div>
          <div className=" w-min m-2 rounded-full">
            <div className=" rounded-full w-20 text-center p-1">
              <a href="/navbar" className=" w-20">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
