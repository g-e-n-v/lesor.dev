import { EmailIcon } from "@/assets/icons/EmailIcon";
import { LocationPinIcon } from "@/assets/icons/LocationPinIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { PublicIcon } from "@/assets/icons/PublicIcon";
import { cvInfo } from "@/data/cv.data";
import { cn } from "@/utils/cn.util";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
});

export default function CVPage() {
  const [header] = cvInfo;

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center bg-slate-100 p-6 text-[13px] font-light",
        notoSerif.className
      )}
    >
      <div id="first-page" className="aspect-A4 w-[210mm] bg-white p-6 shadow">
        <h1 className="mb-2 text-center text-4xl font-bold">{header.fullName}</h1>
        <h2 className="mb-4 text-center">{header.jobPosition}</h2>
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-1">
            <PhoneIcon /> <span>{header.phone}</span>
          </div>

          <div className="flex items-center gap-1">
            <EmailIcon /> <span>{header.email}</span>
          </div>

          <div className="flex items-center gap-1">
            <PublicIcon /> <span>{header.website}</span>
          </div>

          <div className="flex items-center gap-1">
            <LocationPinIcon /> <span>{header.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
