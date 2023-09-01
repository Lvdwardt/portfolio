import About from "../about/about";
interface ComponentProps {
  params?: {
    slug?: string;
  };
  url?: string;
}

export default async function NotFoundComponent({
  params,
  url,
}: ComponentProps) {
  let type = "page";

  const pathname = url ? url : params?.slug ? params.slug : "";
  if (pathname.includes("projects")) {
    type = "project";
  }
  //if route includes /travels
  if (pathname.includes("travels")) {
    type = "trip";
  }

  return (
    <main className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-4 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px] xl:px-0 ">
      <div className="col-span-1 h-full w-full rounded-[2rem] bg-card p-6 text-text sm:col-span-2">
        <About />
      </div>
      <div className="col-span-1 h-full w-full rounded-[2rem] bg-card p-6 text-text sm:col-span-2">
        <h1 className="text-3x flex h-full w-full items-center justify-center p-4 font-extrabold sm:text-3xl">
          Sorry, this {type} does not exist
        </h1>
      </div>
    </main>
  );
}
