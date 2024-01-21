import type { Dispatch } from "react";
import { useEffect, useState } from "react";

export const useLocalStorage = <S>(key: string, init?: S | (() => S)) => {
  const [value, setValue] = useState(init);

  const setState: Dispatch<S> = (state) => {
    setValue(state);
    localStorage.setItem(key, JSON.stringify(state));
  };

  useEffect(() => {
    const handler = () => {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return;
      }

      const value = JSON.parse(raw) as S;

      setValue(value);
    };

    window.addEventListener("storage", handler);

    return () => {
      window.removeEventListener("storage", handler);
    };
  }, [key]);

  return [value, setState] as const;
};
