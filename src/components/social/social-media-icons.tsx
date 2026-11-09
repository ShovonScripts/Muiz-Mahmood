"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    external: true,
    icon: <SiLinkedin size={24} />,
  },
  {
    name: "Email",
    href: `mailto:${config.email}`,
    external: false,
    icon: <Mail size={24} />,
  },
].filter((button) => button.href);

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex items-center">
      {show &&
        BUTTONS.map((button) => {
          const isLinkedIn = button.name === "LinkedIn";
          return (
            <Link
              href={button.href}
              key={button.name}
              target={button.external ? "_blank" : undefined}
              rel={button.external
                ? `noopener noreferrer${isLinkedIn ? " me" : ""}`
                : isLinkedIn
                ? "me"
                : undefined}
              aria-label={button.name}
            >
              <Button variant={"ghost"}>{button.icon}</Button>
            </Link>
          );
        })}
    </div>
  );
};

export default SocialMediaButtons;
