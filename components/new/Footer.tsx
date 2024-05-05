import Link from "next/link";

import IconFacebook from "@/assets/svgs/facebook.svg";
import { cn } from "@/utils/cn.util";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/lesor.dev", icon: <IconFacebook /> },
];

export function Footer() {
  return (
    <footer className="flex h-8 shrink-0 border-t border-stroke">
      <div className="flex h-full items-center border-r border-stroke px-5">find me in:</div>
      {SOCIAL_LINKS.map(({ href, icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex aspect-square h-full items-center justify-center border-r border-stroke text-lg",
            "hover:bg-stroke/35 hover:text-secondary-4"
          )}
          target="_blank"
        >
          {icon}
        </Link>
      ))}
    </footer>
  );
}
