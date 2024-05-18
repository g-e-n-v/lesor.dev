"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { THEME } from "@/constants/theme.constant";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSwitchTheme = () => {
    setTheme(theme === THEME.Light ? THEME.Dark : THEME.Light);
  };

  if (!isMounted) {
    return null;
  }

  return <button onClick={handleSwitchTheme}>ThemeSwitcher {theme}</button>;
}
