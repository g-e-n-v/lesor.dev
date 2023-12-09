"use client";
import { isDarkTheme } from "@/services/theme.service";
import { useTheme, useToggleTheme } from "@/stores/theme.store";
import { useEffect } from "react";

export const ToggleThemeButton = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  useEffect(() => {
    if (isDarkTheme(theme)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <button onClick={toggleTheme}>toggleTheme()</button>;
};
