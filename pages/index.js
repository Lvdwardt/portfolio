import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Timeline from "../components/timeline";
import Logo from "../public/logo.png";


export default function Home() {
  return (
    <>
    
      <div className=" bg-neutral-800 h-screen">
      <Navbar />


        <div className="">
          <Timeline />
        </div>
      </div>
    </>
  );
}
