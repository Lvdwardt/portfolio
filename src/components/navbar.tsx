import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import Gradient from "../assets/lineargradient";

export default function Navbar() {
  const currentRoute = `/${useRouter().pathname.split("/")[1]}`;
  const routes = [
    { name: "Home", href: "/", place: 1 },
    { name: "About", href: "/about", place: 2 },
    { name: "Projects", href: "/projects", place: 3 },
    { name: "Contact", href: "/contact", place: 4 },
  ];
  const currentPlace = routes.find(
    (route) => route.href === currentRoute
  )?.place;
  const currentName = routes.find(
    (route) => route.place === currentPlace
  )?.name;
  return (
    <div className="grid py-4 font-medium xl:grid-cols-3">
      <div className="flex w-full  justify-center xl:block xl:pl-8">
        <Link href="/" className="w-36 p-4" title="back to home">
          <Gradient />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={112}
            height={56}
            fill="url(#logo)"
          >
            <path d="M6.71 9.441c2.224-.14 3.481.887 3.774 3.082.086 10.188.086 20.38 0 30.567-.457 2.465-1.882 3.387-4.285 2.762-1.023-.407-1.64-1.157-1.851-2.247a1936.358 1936.358 0 0 1 0-31.597c.328-1.293 1.117-2.149 2.363-2.567ZM53.633 9.441c1.43-.214 2.558.258 3.39 1.41a309.932 309.932 0 0 1 6.075 15.415c-.586 2.797-2.207 3.675-4.86 2.632-.277-.277-.554-.554-.832-.835L51.523 13.68c-.515-2.047.188-3.461 2.11-4.239ZM78.438 9.441c1.296-.187 2.382.196 3.261 1.157a286.722 286.722 0 0 1 6.2 15.605c-.547 2.844-2.165 3.742-4.856 2.695a3.733 3.733 0 0 1-1.215-1.605 218.824 218.824 0 0 0-2.621-6.422 8146.667 8146.667 0 0 1-9.91 24.02c-1.66 1.683-3.32 1.683-4.988 0-.653-1.07-.739-2.184-.254-3.34a6505.73 6505.73 0 0 0 12.273-30.184c.457-.922 1.16-1.566 2.11-1.926ZM103.242 9.313c2.703-.133 3.961 1.152 3.774 3.851a5159.956 5159.956 0 0 1-12.66 31.211c-1.004 1.48-2.348 1.93-4.028 1.352-1.676-1.016-2.164-2.45-1.469-4.305a4691.478 4691.478 0 0 0 12.274-30.184c.457-.922 1.16-1.566 2.11-1.925ZM19.754 39.879c4.82-.059 9.637.004 14.445.195 2.082 1.102 2.574 2.707 1.473 4.817-.606.761-1.395 1.168-2.367 1.218-4.692.125-9.38.082-14.063-.129-1.863-.804-2.523-2.195-1.98-4.171.52-1.063 1.351-1.704 2.492-1.93Zm0 0" />
          </svg>
        </Link>
      </div>
      <div className=" flex w-full justify-center">
        <div className=" flex w-full max-w-[300px] items-center justify-center text-sm text-text sm:max-w-full">
          <div className="relative flex w-min scale-[90%] gap-4 rounded-full bg-card px-1 py-1.5 sm:scale-100">
            {routes.map((route) => (
              <Link
                key={route.name}
                className="z-50 rounded-full px-3 py-1.5"
                href={route.href}
              >
                {route.name}
              </Link>
            ))}
            <div
              className={clsx(
                "pointer-events-none absolute w-min rounded-full bg-secondary p-1.5 px-2.5 text-transparent transition-all duration-1000",
                currentPlace === 1 && "left-0 ml-1.5 ",
                currentPlace === 2 && "left-1/4",
                currentPlace === 3 && "left-1/2 ml-[-4px]",
                currentPlace === 4 && "left-3/4 ml-1.5"
              )}
            >
              {currentName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
