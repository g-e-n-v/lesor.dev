import Link from "next/link";

import IconFacebook from "@/assets/svgs/facebook.svg";
import IconGithub from "@/assets/svgs/github.svg";
import IconLinkedin from "@/assets/svgs/linkedin.svg";
import IconMail from "@/assets/svgs/mail.svg";
import { DashDivider } from "@/components/DashDivider";

const SOCIALS = [
  {
    icon: IconMail,
    url: "mailto:trungluc.dev@gmail.com",
    name: "Email",
    color: "#EA4335",
  },
  {
    icon: IconLinkedin,
    url: "https://www.linkedin.com/in/trungluc/",
    name: "LinkedIn",
    color: "#0B65C2",
  },
  {
    icon: IconGithub,
    url: "https://github.com/lesordev",
    name: "GitHub",
    color: "#24292E",
  },
  {
    icon: IconFacebook,
    url: "https://www.facebook.com/lesor.dev/",
    name: "Facebook",
    color: "#0765FF",
  },
];

export default function ContactPage() {
  return (
    <div className="py-10">
      <h1 className="mb-2 text-xl font-medium">Contact</h1>
      <p className="text-neutral-500">
        Feel free to get in touch and let&apos;s have a discussion about how we can work together.
      </p>
      <DashDivider />

      <h2 className="mb-2 font-medium">Find me on social media</h2>
      <div className="flex gap-4">
        {SOCIALS.map(({ icon: Icon, ...item }) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            style={{ backgroundColor: item.color }}
            className="flex items-center gap-2 rounded-md px-4 py-2"
          >
            <Icon className="size-6" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
