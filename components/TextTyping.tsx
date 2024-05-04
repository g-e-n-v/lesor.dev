"use client";
import { type ReactNode, useEffect, useState } from "react";

type TextTypingProps = {
  text: string;
  className?: string;
  prefix?: ReactNode;
};

export function TextTyping({ text, className, prefix }: TextTypingProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayText.length < text.length) {
        setDisplayText((prev) => `${prev}${text[displayText.length] ?? ""}`);
      }
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, [displayText.length, text]);

  return (
    <div className={className}>
      {prefix}
      <span className="ligatures-none">{displayText}</span>
      <span className="animate-ping text-white">_</span>
    </div>
  );
}
