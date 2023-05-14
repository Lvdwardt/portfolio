import About from "../gridcomponents/about";
import { useRouter } from "next/router";

export default function NotFound() {
  let type = "page";

  const router = useRouter();
  //check if route includes /projects
  if (router.pathname.includes("/projects")) {
    type = "project";
  }
  //if route includes /travels
  if (router.pathname.includes("/travels")) {
    type = "trip";
  }

  return (
    <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-4 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
      <div className="col-span-2 rounded-[2rem] bg-card p-4 pl-6 pt-[18px]">
        <About />
      </div>
      <div className="col-span-1 rounded-[2rem] bg-card sm:col-span-2">
        <h1 className="text-3x flex h-full w-full items-center justify-center p-4 font-extrabold sm:text-3xl">
          Sorry, this {type} does not exist
        </h1>
      </div>
    </div>
  );
}
