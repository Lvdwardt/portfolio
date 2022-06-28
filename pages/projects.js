import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
// import Projects from "../components/projects";
import Logo from "../public/logo.png";

export default function Project() {
  return (
    <>
      <Navbar />
      <div className=" h-screen bg-neutral-800">
        <div className="bg-neutral-900">
          <div className=" w-36  p-4">
            <Image src={Logo} alt="logo" />
          </div>
        </div>
        <div className="">{/* <Projects /> */}</div>
      </div>
    </>
  );
}
