"use client";
import { usePathname } from "next/navigation";

import { NavLink } from "@/components/new/NavLink";

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
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="h-12 shrink-0 border-b border-stroke">
      <nav className="flex h-full">
        <NavLink href={"/new/hello"} className="min-w-80">
          lesor.dev
        </NavLink>

        {NAV_ITEMS.map(({ label, href }) => {
          const isActive = pathname.includes(href);

          return (
            <NavLink key={href} href={href} isActive={isActive}>
              {label}
            </NavLink>
          );
        })}

        <div className="grow" />

        <NavLink
          href="/new/contact"
          isActive={pathname.includes("/contact")}
          className="border-l border-r-0"
        >
          _contact-me
        </NavLink>
      </nav>
    </header>
  );
}
