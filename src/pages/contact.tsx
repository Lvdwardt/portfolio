import Head from "next/head";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl  p-4 xl:col-span-2 xl:row-span-2">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
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
      </main>
    </div>
  );
}
