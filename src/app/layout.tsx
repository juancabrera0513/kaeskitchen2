// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaeskitchen.com"),
  title: "Kae’s Kitchen – Cakes & Cupcakes in Lincoln County & Greater St. Louis, Missouri",
  description:
    "Handcrafted cakes, cupcakes and cookies in Lincoln County, MO. Pickups in Lincoln, St. Charles & St. Louis County. Order online.",
  openGraph: {
    title: "Kae’s Kitchen – Cakes & Cupcakes",
    description:
      "Freshly baked cakes, cupcakes, and cookies. Pickups in Lincoln, St. Charles & St. Louis County.",
    url: "https://kaeskitchen.com",
    siteName: "Kae’s Kitchen",
    images: ["/assets/img/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kae’s Kitchen – Cakes & Cupcakes",
    description:
      "Order freshly baked cakes, cupcakes, and cookies. Pickups in Lincoln, St. Charles & St. Louis County.",
    images: ["/assets/img/og-image.jpg"],
  },
  alternates: { canonical: "https://kaeskitchen.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Kae’s Kitchen",
    image: "https://kaeskitchen.com/assets/img/og-image.jpg",
    telephone: "+1-636-244-7919",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lincoln County",
      addressRegion: "MO",
      addressCountry: "US",
    },
    url: "https://kaeskitchen.com",
    servesCuisine: "Desserts",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Lincoln County, MO" },
      { "@type": "AdministrativeArea", name: "St. Charles County, MO" },
      { "@type": "AdministrativeArea", name: "St. Louis County, MO" },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Remix Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.7.0/remixicon.css"
        />
        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/img/favicon.png" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
