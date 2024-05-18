import { THEME } from "@/constants/theme.constant";

export type Theme = (typeof THEME)[keyof typeof THEME];
