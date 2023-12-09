import type { StoreApi, UseBoundStore } from "zustand";

export type ZustandHookSelectors<StateType> = {
  [Key in keyof StateType as `use${Capitalize<string & Key>}`]: () => StateType[Key];
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function createSelectorHooks<StateType extends object>(store: UseBoundStore<StoreApi<StateType>>) {
  const storeIn: Record<string, unknown> = {};

  Object.keys(store.getState()).forEach((key) => {
    const selector = (state: StateType) => state[key as keyof StateType];
    storeIn[`use${capitalize(key)}`] = () => store(selector);
  });

  return storeIn as ZustandHookSelectors<StateType>;
}
