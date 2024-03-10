"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavPill() {
  const path = usePathname();
  let currentRoute = path.split("/")[1];
  if (currentRoute === "") currentRoute = "/";

  const routes = [
    { name: "Home", href: "/", place: 1, width: 17.5, left: 2, prefetch: true },
    {
      name: "About",
      href: "/about",
      place: 2,
      width: 18.5,
      left: 25.1,
      prefetch: true,
    },
    {
      name: "Projects",
      href: "/projects",
      place: 3,
      width: 22,
      left: 49.5,
      prefetch: true,
    },
    {
      name: "Travels",
      href: "/travels",
      place: 4,
      width: 20,
      left: 78,
      prefetch: false,
    },
  ];
  const currentPlace = routes.find((route) => route.href.includes(currentRoute))
    ?.place as number;

  //calculate difference between current place and the place of the clicked route
  //remove negative sign
  return (
    <nav className="relative scale-[90%] sm:scale-100">
      <ul className="flex w-min gap-4 rounded-full bg-card px-1 py-1.5 ">
        {routes.map((route) => (
          <li
            key={route.name}
            className="z-50 py-1.5 transition-all hover:scale-105 "
          >
            <Link
              href={route.href}
              className="rounded-full  px-3 py-1.5"
              prefetch={route.prefetch}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        initial={{
          width: `${routes[currentPlace - 1]?.width || 96}%`,
          left: `${routes[currentPlace - 1]?.left || 2}%`,
        }}
        animate={{
          width: `${routes[currentPlace - 1]?.width || 96}%`,
          left: `${routes[currentPlace - 1]?.left || 2}%`,
          transition: {
            duration: 0.3,
            ease: "backInOut",
          },
        }}
        className="absolute top-1.5 h-[75%] w-full rounded-full bg-secondary"
      ></motion.div>
    </nav>
  );
}
