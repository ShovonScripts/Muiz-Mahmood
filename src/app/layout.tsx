import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Script from "next/script";
import SiteFrame from "@/components/site-frame";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { UMAMI_SRC } from "@/lib/umami";
import { JsonLd } from "@/components/json-ld";
import { homeGraph } from "@/lib/seo";

/* Body/base font — Space Grotesk, bound to --font-sans (applied as `font-sans`
 * on <html>). Everything that isn't a heading inherits this. */
const spaceGroteskSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* Heading font — Unbounded, bound to --font-display and applied to h1–h6. */
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: {
    default: config.title,
    template: `%s | ${config.author}`,
  },
  applicationName: `${config.author} Portfolio`,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author, url: config.site }],
  creator: config.author,
  publisher: config.author,
  category: "Design",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "./" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    siteName: `${config.author} — Portfolio`,
    locale: "en_US",
    url: "/",
    title: config.title,
    description: config.description.short,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: `${config.author} — VFX & 3D Product Visualization`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [{ url: config.ogImg, alt: `${config.author} — VFX & 3D Product Visualization` }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f14" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        spaceGroteskSans.variable,
        unbounded.variable,
        "font-sans",
      ].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var theme=localStorage.getItem("theme")||"dark";if(theme==="system"){theme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var root=document.documentElement;root.classList.remove("light","dark");root.classList.add(theme);root.style.colorScheme=theme}catch{document.documentElement.classList.add("dark")}})();`}
        </Script>
        {process.env.UMAMI_SITE_ID && UMAMI_SRC && (
          <Script
            defer
            src={UMAMI_SRC}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}
        <JsonLd data={homeGraph} />
      </head>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
        <JsonLd data={homeGraph} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}