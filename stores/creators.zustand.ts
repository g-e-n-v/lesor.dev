import { create } from "zustand";
import { persist } from "zustand/middleware";

export const createStoreWithPersist = <T>(...args: Parameters<typeof persist<T>>) => create(persist<T>(...args));
