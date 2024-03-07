// const LESOR_CHAT_ID = "6527094393";
// const ANLE_CHAT_ID = "5933330412";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// const messages = ["Hehe"];

export function POST() {
  const now = dayjs().tz("Asia/Ho_Chi_Minh");
  const hour = now.hour();

  return new Response(`cron-job anle local ${hour}`, {
    status: 200,
  });
}
