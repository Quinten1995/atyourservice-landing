// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atyourservice24.eu";

  const pages = [
    "/",          // Startseite
    "/thanks",    // Danke-Seite
    "/de",        // falls du in Zukunft Sprachpfade nutzt
    "/nl",
    "/en",
  ];

  const lastModified = new Date();

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
