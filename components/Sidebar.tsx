"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import BEAR_PINK_GIF from "@/assets/images/bear-pink.gif";
import AVATAR_IMAGE from "@/assets/images/trungluc.jpg";
import IconRight from "@/assets/svgs/arrow-right.svg";
import IconBook from "@/assets/svgs/book.svg";
import IconClose from "@/assets/svgs/close.svg";
import IconHeartbeat from "@/assets/svgs/heartbeat.svg";
import IconHome from "@/assets/svgs/home.svg";
import IconMenu from "@/assets/svgs/menu.svg";
import IconSearch from "@/assets/svgs/search.svg";
import IconSend from "@/assets/svgs/send.svg";
import { KeyboardKey } from "@/components/KeyboardKey";
// import { ThemeSwitcher } from "@/components/v3/ThemeSwitcher";
import { cn } from "@/utils/cn.util";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/hello",
    icon: <IconHome />,
  },
  {
    label: "Monitor",
    href: "/monitor",
    icon: <IconHeartbeat />,
  },
  {
    label: "Writings",
    href: "/writings",
    icon: <IconBook />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <IconSend />,
  },
];

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={cn(
          "fixed right-4 top-4 z-50 cursor-pointer rounded-full border-[1.5px] border-solid border-neutral-100 bg-neutral-800 p-2 text-2xl",
          "md:hidden"
        )}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        {isOpen ? <IconClose /> : <IconMenu />}
      </button>

      <header
        className={cn(
          "transition duration-500",
          className,
          {
            "translate-x-full": !isOpen,
          },
          "md:transform-none"
        )}
      >
        <aside className="flex h-full flex-col pb-4 pt-10">
          <div className="mb-8 flex items-center gap-4">
            <Image className="size-14 rounded-full" src={AVATAR_IMAGE} alt="luc.le" />

            <div className="flex grow flex-col justify-evenly">
              <h1 className="flex items-center gap-2 text-xl font-bold">
                Luc Le <Image src={BEAR_PINK_GIF} alt="thunderbolt-gif" className="size-6" />
              </h1>
              <h2 className="font-medium text-neutral-500">@lesor_</h2>
            </div>
          </div>

          <button className="mb-12 flex w-full items-center gap-2 rounded-lg border-2 border-solid border-neutral-700 p-2 text-neutral-500">
            <IconSearch />
            <span className="grow text-left">Search</span>
            <KeyboardKey>⌘ K</KeyboardKey>
          </button>

          <nav className="grow">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname.includes(item.href);

                return (
                  <li key={item.label}>
                    <Link
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-2 rounded-lg p-2 transition",
                        "hover:bg-neutral-700/50"
                      )}
                    >
                      {item.icon}
                      <span className="grow">{item.label}</span>
                      {isActive && <IconRight className="text-neutral-500" />}

                      {isActive && (
                        <motion.div
                          layoutId="active-route"
                          className="absolute left-0 top-0 -z-10 size-full rounded-lg bg-neutral-700"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* <ThemeSwitcher /> */}
        </aside>
      </header>
    </>
  );
}
