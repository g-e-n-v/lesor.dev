import { motion } from "framer-motion";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { PropsWithChildren } from "react";

import { cn } from "@/utils/cn.util";

type NavLinkProps = PropsWithChildren<
  LinkProps & {
    isActive?: boolean;
    className?: string;
  }
>;

export function NavLink({ className, children, isActive, ...rest }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "relative inline-flex h-12 w-full cursor-pointer items-center px-4",
        "hover:bg-stroke/35 hover:text-secondary-4",
        className
      )}
      {...rest}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="active-route"
          className={cn("absolute bottom-0 left-0 hidden h-0.5 w-full bg-accent-1", "lg:block")}
        />
      )}
    </Link>
  );
}
