import Head from "next/head";
import About from "../components/about";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl  p-4 pt-2 xl:col-span-2 xl:row-span-2">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Contact</h1>
        <p className="mt-3 text-2xl">
          You can contact me on{" "}
          <a
            className="text-primary hover:underline"
            href="https://api.whatsapp.com/send?phone=31630702130"
          >
            Whatsapp
          </a>
          ,{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:contact@leonvdw.nl"
          >
            Email
          </a>
          , or{" "}
          <a
            className="text-primary hover:underline"
            href="
            https://www.github.com/Lvdwardt"
          >
            Github
          </a>
        </p>
      </main> */}
      <div className="w-full overflow-visible transition-all duration-300 ease-in ">
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pt-2 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
          <div className="col-span-2 rounded-[2rem] bg-card p-4 pl-6 pt-[18px]">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}
