import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${config.author} — VFX & 3D Product Visualization`,
    short_name: config.author,
    description: config.description.short,
    start_url: "/",
    display: "standalone",
    background_color: "#f1f5f9",
    theme_color: "#0a0f14",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["design", "graphics", "portfolio"],
    shortcuts: [
      {
        name: "Résumé",
        short_name: "Résumé",
        description: "View or download résumé",
        url: "/resume",
        icons: [{ src: "/icon.png", sizes: "192x192" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch",
        url: "/#contact",
        icons: [{ src: "/icon.png", sizes: "192x192" }],
      },
    ],
  };
}