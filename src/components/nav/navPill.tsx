"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavPill() {
  const path = usePathname();
  //path == /about or /projects/janskapsalon
  //trim the path to /about or /projects
  const currentRoute = path.split("/")[1];

  const routes = [
    { name: "Home", href: "", place: 1, width: 17.5, left: 2 },
    { name: "About", href: "about", place: 2, width: 18.5, left: 25.1 },
    { name: "Projects", href: "projects", place: 3, width: 22, left: 49.5 },
    { name: "Travels", href: "travels", place: 4, width: 20, left: 78 },
  ];
  const currentPlace = routes.find((route) => route.href === currentRoute)
    ?.place as number;

  //calculate difference between current place and the place of the clicked route
  //remove negative sign
  return (
    <div className="relative flex w-min scale-[90%] gap-4 rounded-full bg-card px-1 py-1.5 sm:scale-100">
      {routes.map((route) => (
        <Link
          key={route.name}
          className="z-50 rounded-full px-3 py-1.5 transition-all hover:scale-105 "
          href={route.href}
        >
          {route.name}
        </Link>
      ))}

      <motion.div
        initial={{
          width: `${routes[currentPlace - 1]?.width || 96}%`,
          left: `${routes[currentPlace - 1]?.left || 2}%`,
        }}
        animate={{
          width: `${routes[currentPlace - 1]?.width || 96}%`,
          left: `${routes[currentPlace - 1]?.left || 2}%`,
          transition: {
            duration: 1,
            ease: "backInOut",
          },
        }}
        className="absolute h-[75%] w-full rounded-full bg-secondary"
      ></motion.div>
    </div>
  );
}
