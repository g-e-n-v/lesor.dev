import dayjs from "dayjs";

import type { StrictDayJsConfigType } from "@/types/app.type";

export const formatShortDate = (date: StrictDayJsConfigType) => dayjs(date).format("MMM DD, YYYY");
