"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
] as const;

function getActiveRoute(pathname: string) {
  if (!pathname || pathname === "/") {
    return routes[0];
  }

  return (
    routes.find(
      (route) => route.href !== "/" && pathname.startsWith(route.href)
    ) ?? routes[0]
  );
}

export default function NavPill() {
  const path = usePathname();
  const activeRoute = getActiveRoute(path);

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
        initial={false}
        animate={{
          width: `${activeRoute.width}%`,
          left: `${activeRoute.left}%`,
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
