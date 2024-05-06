"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

import IconMenuFold from "@/assets/svgs/menu-fold.svg";
import IconMenuUnfold from "@/assets/svgs/menu-unfold.svg";
import { NavLink } from "@/components/new/NavLink";
import { cn } from "@/utils/cn.util";

const NAV_ITEMS = [
  {
    label: "_hello",
    href: "/new/hello",
  },
  {
    label: "_about-me",
    href: "/new/about-me",
  },
  {
    label: "_snippets",
    href: "/new/snippets",
  },
  {
    label: "_writings",
    href: "/new/writings",
  },
  {
    label: "_contact-me",
    href: "/new/contact",
  },
];

export function Header() {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-12 shrink-0 border-b border-stroke">
      <nav className="relative flex h-full">
        <NavLink
          href={"/new/hello"}
          className={cn("w-max shrink-0", "lg:w-80 lg:border-r lg:border-stroke")}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          lesor.dev
        </NavLink>

        <ul
          className={cn(
            "absolute right-0 top-12 z-50 flex h-[calc(100vh-6rem-2px)] w-full flex-col bg-primary-2 transition ease-in-out",
            "lg:static lg:h-full lg:transform-none lg:flex-row",
            showMenu ? "translate-x-0" : "translate-x-full"
          )}
        >
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname.includes(href);

            return (
              <li key={href} className={cn("border-b border-stroke", "lg:border-b-0 lg:border-r")}>
                <NavLink
                  href={href}
                  isActive={isActive}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="grow" />

        <button
          className={cn(
            "flex aspect-square shrink-0 items-center justify-center text-xl",
            "lg:hidden"
          )}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? <IconMenuFold /> : <IconMenuUnfold />}
        </button>
      </nav>
    </header>
  );
}
