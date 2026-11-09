"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SiLinkedin } from "react-icons/si";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); mailto still works.
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24"
    >
      <SectionHeader
        id="contact"
        title={
          <>
            LET&apos;S WORK <br />
            TOGETHER
          </>
        }
        desc="Have a project in mind? Let's make something worth watching."
        className="static top-0 mb-12 md:mb-16"
      />

      <div className="z-[9999] mx-auto w-full max-w-3xl">
        <Card className="overflow-hidden rounded-2xl border-border/60 bg-white/70 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-gradient-to-br dark:from-[#111b19] dark:via-[#0d1518] dark:to-[#0a1014] dark:shadow-black/50 dark:ring-1 dark:ring-inset dark:ring-white/[0.06] dark:backdrop-blur-xl">
          <div className="relative p-6 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-foreground/[0.05] to-transparent dark:from-emerald-300/[0.07]"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 dark:border-emerald-400/25 dark:bg-emerald-400/[0.12] dark:text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Open to freelance &amp; remote work
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  Usually replies within 1–2 business days
                </span>
              </div>

              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email me at
                </p>
                <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`mailto:${config.email}`}
                    className="group inline-flex min-w-0 items-center gap-2.5 text-foreground transition-colors hover:text-emerald-500"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-emerald-500 md:h-6 md:w-6" />
                    <span className="break-all text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
                      {config.email}
                    </span>
                    <ArrowUpRight className="hidden h-5 w-5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
                  </a>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={copyEmail}
                    className="shrink-0 gap-2 dark:border-white/15 dark:bg-white/5 dark:hover:border-emerald-300/25 dark:hover:bg-emerald-300/[0.08]"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
                  </Button>
                </div>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent dark:via-white/10" />

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="group cursor-can-hover rounded-xl border border-border/60 bg-secondary/20 p-5 transition-colors hover:border-foreground/20 hover:bg-secondary/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-emerald-300/25 dark:hover:bg-emerald-300/[0.06]"
                >
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <SiLinkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-foreground">
                      Connect with me
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </a>

                <div className="rounded-xl border border-border/60 bg-secondary/20 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Based in
                  </div>
                  <div className="mt-2 text-sm font-medium text-foreground">
                    {config.location}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Working remotely worldwide · GMT+6
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-muted-foreground">
                For the fastest reply, email{" "}
                <a
                  href={`mailto:${config.email}`}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {config.email}
                </a>{" "}
                with a short brief and timeline.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
