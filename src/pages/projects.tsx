import Head from "next/head";

export default function Projects() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-2">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Projects</h1>
      </main>
    </div>
  );
}
