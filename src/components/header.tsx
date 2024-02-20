"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/events/all",
    name: "All Events",
  },
];

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center h-14 padding-x border-b border-white/10">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-6 text-sm h-full">
          {routes.map((route) => (
            <li
              className={cn(
                "hover:text-white transition relative h-full flex items-center",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
              key={route.name}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path && (
                <motion.div
                  layoutId="active-border"
                  className="bg-accent h-1 w-full absolute bottom-0 rounded-xl"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
