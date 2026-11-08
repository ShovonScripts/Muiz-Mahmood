import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { config } from "@/data/config";
import { MapPin, Sparkles } from "lucide-react";

const STATS = [
  { value: "6+", label: "Years in VFX & motion" },
  { value: "9", label: "Companies & studios" },
  { value: "3", label: "Current client roles" },
];

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="relative z-10 flex min-h-screen items-center bg-background py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <SectionHeader
          id="about"
          title="About"
          desc="VFX artist & 3D product visualizer"
          className="static mb-12 mt-0 md:mb-16"
        />

        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr] md:gap-14">
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary/30 shadow-xl">
              <Image
                src="/assets/muiz.png"
                alt="Muiz Mahmood"
                fill
                sizes="(max-width: 768px) 80vw, 280px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {config.location} · working remotely
            </div>
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
              <Sparkles className="h-3.5 w-3.5" />
              Open to freelance & remote work
            </div>

            <p className="text-lg leading-relaxed text-foreground">
              I&apos;m Muiz Mahmood, a VFX and motion graphics designer with
              6+ years of experience producing visuals for commercials, product
              videos, and cinematic content.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I specialize in compositing, motion tracking, and 3D product
              visualization, with hands-on VFX prep experience for production
              pipelines. My work spans agencies, e-commerce brands, and
              streaming projects — from photoreal cosmetic renders to
              rotoscoping and clean plating for film and OTT.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I&apos;m currently a 3D Product Visualizer at BeautyBoss and a
              Motion Graphic Designer at ShineOn, while supervising commercial
              visualization projects at Design Musketeer.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-secondary/20 p-3 text-center"
                >
                  <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resume">
                <Button>View résumé</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline">Get in touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
