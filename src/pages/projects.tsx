import Head from "next/head";
import FlynImg from "../components/gridcomponents/flynImg";
import Janskapsalonflat from "../components/gridcomponents/janskapsalonflat";
import About from "../components/gridcomponents/about";

export default function Projects() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-2">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full overflow-visible transition-all duration-300 ease-in ">
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pt-2 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
          <div className="order-1 col-span-1 rounded-[2rem] bg-card p-4 pl-6 pt-[18px] sm:col-span-2 xl:col-span-1">
            <About />
          </div>
          <div className="group relative order-2 overflow-hidden rounded-[2rem] bg-pinklight dark:bg-[#2F3763] sm:row-span-2">
            <FlynImg />
          </div>
          <div className="group relative hidden overflow-hidden rounded-[2rem] bg-pinklight dark:bg-[#2F3763] sm:order-8 sm:col-span-2 sm:block">
            <Janskapsalonflat />
          </div>
        </div>
      </div>
    </div>
  );
}
