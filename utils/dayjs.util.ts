import type { StrictDayJsConfigType } from "@/types/app.type";
import dayjs from "dayjs";

export const formatShortDate = (date: StrictDayJsConfigType) => dayjs(date).format("MMM DD, YYYY");
