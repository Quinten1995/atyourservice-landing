// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atyourservice24.eu";
const store = {
  android: "https://play.google.com/store/apps/details?id=com.quinten.atyourservice&pcampaignid=web_share",
  ios: "https://apps.apple.com/be/app/atyourservice24/id6748581941",
};

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "AtYourService – Jobs in deiner Nähe. 0% Provision.",
    template: "%s | AtYourService",
  },
  description:
    "AtYourService verbindet Kunden und Dienstleister in deiner Nähe – ohne Provisionen. Push für neue Aufträge, fair & lokal. iOS & Android.",
  keywords: [
    "Dienstleister finden",
    "Jobs in der Nähe",
    "Handwerker App",
    "Babysitter",
    "Reinigung",
    "Gartenarbeit",
    "Aufträge ohne Provision",
    "0% Provision",
  ],
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      nl: "/?lang=nl", // später auf echte /nl-Route umstellen
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: base,
    siteName: "AtYourService",
    title: "AtYourService – Jobs in deiner Nähe. 0% Provision.",
    description:
      "Kunden & Dienstleister direkt verbinden – ohne Provision. Fair, schnell & lokal. iOS & Android.",
    images: [
      {
        url: "/og.jpg", // optional: 1200x630 unter /public/og.jpg
        width: 1200,
        height: 630,
        alt: "AtYourService App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtYourService – Jobs in deiner Nähe. 0% Provision.",
    description:
      "Kunden & Dienstleister ohne Provisionen – fair, schnell und lokal.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional, falls vorhanden
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AtYourService",
    url: base,
    logo: `${base}/favicon.ico`,
    sameAs: [store.android, store.ios],
  };

  const appLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "AtYourService",
    operatingSystem: "iOS, Android",
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    url: base,
    installUrl: [store.android, store.ios],
  };

  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* JSON-LD für Rich Results */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgLd)}
        </Script>
        <Script id="ld-app" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(appLd)}
        </Script>
      </body>
    </html>
  );
}
