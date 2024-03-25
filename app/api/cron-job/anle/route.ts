import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import type { NextRequest } from "next/server";
import axios from "axios";
import { sample } from "lodash-es";

dayjs.extend(utc);
dayjs.extend(timezone);

// const LESOR_CHAT_ID = "6527094393";
const ANLE_CHAT_ID = "5933330412";

// const messages = ["Hehe"];

const WATER_DRINK_REMINDER_MESSAGES = [
  "Đi uống nước nhe `embecuaanh`",
  "Tôi ra lệnh cho em đi uống nước ngay",
  "Trúc xinh trúc mọc đầu đình - Người xinh người nhớ uống nhiều nước nha 😘",
  "Em uống nước đi, rồi anh dẫn em đi ăn kem nà",
  "Kẻ mắt, kẻ môi, kẻ không uống nước.",
  "Uống đủ 2L nước mỗi ngày sẽ khiến bạn đẹp hơn",
  "Chào em, anh là luật sư và anh đã thu thập đủ bằng chứng em không uống đủ nước lọc mỗi ngày. Em vui lòng đi uống nước lọc ngay. Nếu sau 30 phút mà em vẫn chưa đi uống nước thì bên chị sẽ dùng tới pháp luật và em sẽ bị lôi đầu ra Côn Đảo !",
  "https://karofi.com/neu-khong-co-nuoc-uong-ban-co-the-song-sot-duoc-bao-lau-bv2144.html#:~:text=B%E1%BA%A1n%20c%C3%B3%20th%E1%BB%83%20c%E1%BA%A3m%20th%E1%BA%A5y,suy%20th%E1%BA%ADn%20v%C3%A0%20t%E1%BB%AD%20vong.",
  "Chao em anh la Jungkook day anh moi bay sang Viet Nam hoc tieng Viet de nhac cac em uong nuoc!",
  "Cảm lạnh chắc là do gió. Nhưng cảm thấy khát chắc chắn do không uống nước ",
  "Hôm nay em đã uống nước chưa ?",
  "Phiên chợ tình anh rình mò mua nước - Nước đây rồi sao không uống em ơi 🥹",
  "Muốn sang thì bắc cầu Kiều - Muốn mau hết khát uống nhiều nước nha",
  "Hôm nay bảnh buồn quá em ạ, nghĩ về chuyện em quên uống nước, bảnh khóc luôn",
  "Đầu lòng hai ả tố nga - Thúy Kiều là chị em uống nước chưa?",
];

export async function POST(request: NextRequest) {
  const action = request.nextUrl.searchParams.get("action");

  switch (action) {
    case "water-drink-reminder":
      await axios.post("https://api.telegram.org/bot7085375476:AAEIzgkjJ7fMcuwmNWjrxprUptQSfT5AIxg/sendMessage", null, {
        params: {
          chat_id: ANLE_CHAT_ID,
          text: sample(WATER_DRINK_REMINDER_MESSAGES),
        },
      });
      break;

    default:
      break;
  }

  return new Response("OK", {
    status: 200,
  });
}
