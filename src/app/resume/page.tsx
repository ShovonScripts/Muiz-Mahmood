import type { Metadata } from "next";
import ResumeView from "./resume-view";
import { JsonLd } from "@/components/json-ld";
import { resumeGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Muiz Mahmood — VFX Artist & 3D Product Visualization Specialist. View online or download the PDF.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Résumé — Muiz Mahmood",
    description: "VFX Artist & 3D Product Visualization Specialist résumé.",
    url: "/resume",
    type: "website",
    images: [
      {
        url: "/assets/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muiz Mahmood — VFX & 3D Product Visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Résumé — Muiz Mahmood",
    description: "VFX Artist & 3D Product Visualization Specialist résumé.",
    images: ["/assets/seo/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <>
      <JsonLd data={resumeGraph} />
      <ResumeView />
    </>
  );
}