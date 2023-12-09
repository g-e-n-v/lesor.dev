import { Theme } from "@/constants/theme.constant";
import { createStoreWithPersist } from "@/stores/creators.zustand";
import { createSelectorHooks } from "@/stores/createSelectors";

type ThemeState = {
  theme: Theme;
};

type ThemeAction = {
  toggleTheme: () => void;
};

export const themeStore = createStoreWithPersist<ThemeState & ThemeAction>(
  (set, get) => ({
    theme: Theme.LIGHT,
    toggleTheme: () => {
      set({ theme: get().theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT });
    },
  }),
  { name: "theme" }
);

export const { useTheme, useToggleTheme } = createSelectorHooks(themeStore);
