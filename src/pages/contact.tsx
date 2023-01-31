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
      </main>
    </div>
  );
}
