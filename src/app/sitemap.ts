import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export const dynamic = "force-static";

const lastmod = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.site,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${config.site}/resume`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}