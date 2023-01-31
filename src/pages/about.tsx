import Head from "next/head";
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl p-4  xl:col-span-2 xl:row-span-2">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">About</h1>
      </main>
    </div>
  );
}
