// const LESOR_CHAT_ID = "6527094393";
// const ANLE_CHAT_ID = "5933330412";

import dayjs from "dayjs";

// const messages = ["Hehe"];

export function POST() {
  console.log(dayjs().format("DD/MM/YYYY HH:mm:ss"));

  return new Response("Hello, Next.js! anle", {
    status: 200,
  });
}
