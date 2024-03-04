import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AVATAR_IMAGE from "@/assets/images/trungluc.jpg";

export default function Page() {
  return (
    <section className="mt-20">
      <div className="mb-8 flex gap-8">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full border-4 border-solid border-white bg-blue-200 shadow">
          <Image src={AVATAR_IMAGE} alt="Lê Trung Lực" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Luc Le</h2>
          <h3 className="text-gray-800">
            Developer at{" "}
            <Link href="https://enouvo.com/" target="_blank" className="underline">
              Enouvo IT Solution
            </Link>
          </h3>
        </div>
      </div>

      <p className="font-mono text-gray-500">hello, i am a passionate and creative developer from Viet Nam.</p>

      <p className="font-mono text-gray-500">
        welcome to to my space where I share my journey to becoming a better developer.
      </p>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Luc Le - Developer",
};
