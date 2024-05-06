import dayjs from "dayjs";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import type { StrictDayJsConfigType } from "@/types/app.type";

type WorkCardProps = {
  company: string;
  logo?: StaticImageData;
  position: string;
  description: Array<string>;
  from: StrictDayJsConfigType;
  to?: StrictDayJsConfigType;
};

export function WorkCard({ company, description, from, logo, position, to }: WorkCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {logo ? (
          <Image className="size-12 rounded-lg bg-white p-1" src={logo} alt={company} />
        ) : (
          <div className="size-12 rounded-lg bg-white p-1" />
        )}

        <div className="flex grow flex-col justify-between">
          <h3 className="text-lg font-semibold text-secondary-3">{company}</h3>
          <h4>{position}</h4>
        </div>
        <div>
          {dayjs(from).format("MMM. YYYY")} - {to ? dayjs(to).format("MMM. YYYY") : "Present"}
        </div>
      </div>

      <ul className="list-inside list-disc pl-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
