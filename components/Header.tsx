"use client";
import { cn } from "@/utils/cn.util";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { BoldHomeIcon } from "@/assets/icons/BoldHomeIcon";
import AVATAR_IMAGE from "@/assets/images/trungluc.jpg";
import Image from "next/image";

const NAV_ITEMS = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "snippets",
    url: "/snippets",
  },
  {
    title: "writings",
    url: "/writings",
  },
];

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className={cn("sticky top-2 z-10 my-4 flex items-center px-2", "md:top-4 md:my-8", className)}>
      <nav className="flex h-12 w-full items-center justify-between rounded-full border border-white/40 bg-white/80 p-2 text-sm font-medium text-gray-500 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
        <div className="flex h-full items-center justify-center overflow-hidden rounded-full">
          {isHomePage ? (
            <div className="flex aspect-square h-full w-full items-center justify-center">
              <BoldHomeIcon className="cursor-pointer" />
            </div>
          ) : (
            <Link href="/" className="relative aspect-square h-full w-full overflow-hidden bg-blue-200">
              <Image src={AVATAR_IMAGE} alt="Lê Trung Lực" fill className="object-cover" sizes="200px" />
            </Link>
          )}
        </div>

        <ul className="flex h-full items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActiveRoute = item.title === "home" ? pathname === item.url : pathname.startsWith(item.url);

            return (
              <li key={item.url} className="relative flex h-full items-center px-4">
                {isActiveRoute && (
                  <motion.div
                    layoutId="activeRoute"
                    className="absolute inset-0 h-full w-full rounded-full bg-gray-100"
                  />
                )}

                <Link href={item.url} className={cn("z-10", "hover:text-gray-950", { "text-gray-950": isActiveRoute })}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
