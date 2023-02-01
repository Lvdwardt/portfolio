import Head from "next/head";

export default function Projects() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-2">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full overflow-visible transition-all duration-300 ease-in ">
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 px-4 pt-4 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <div className="rounded-[2rem] bg-card p-4 text-2xl font-bold">
            <h1>Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
