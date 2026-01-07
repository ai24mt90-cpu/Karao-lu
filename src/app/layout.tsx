import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.karaoglu.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karaoğlu Universal Mühendislik | Kamu Müteahhitliği & İnşaat",
    template: "%s | Karaoğlu Universal Mühendislik",
  },
  description: "Van merkezli kamu müteahhidi. 2014'ten bu yana altyapı, üstyapı ve mühendislik projelerinde güvenilir çözüm ortağınız. ISO 9001 sertifikalı, kaliteli ve sürdürülebilir yapılar.",
  keywords: [
    "kamu müteahhidi",
    "inşaat firması Van",
    "mühendislik şirketi",
    "altyapı projeleri",
    "üstyapı projeleri",
    "kamu ihale",
    "Van inşaat",
    "Karaoğlu Mühendislik",
    "yapı taahhüt",
    "inşaat taahhüt",
    "kamu projeleri",
    "bina inşaatı",
    "yol yapımı",
    "altyapı inşaatı",
  ],
  authors: [{ name: "Karaoğlu Universal Mühendislik", url: siteUrl }],
  creator: "Karaoğlu Universal Mühendislik",
  publisher: "Karaoğlu Universal Mühendislik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Karaoğlu Universal Mühendislik",
    title: "Karaoğlu Universal Mühendislik | Kamu Müteahhitliği & İnşaat",
    description: "Van merkezli kamu müteahhidi. 2014'ten bu yana altyapı, üstyapı ve mühendislik projelerinde güvenilir çözüm ortağınız.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karaoğlu Universal Mühendislik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaoğlu Universal Mühendislik | Kamu Müteahhitliği & İnşaat",
    description: "Van merkezli kamu müteahhidi. 2014'ten bu yana altyapı, üstyapı ve mühendislik projelerinde güvenilir çözüm ortağınız.",
    images: ["/og-image.jpg"],
    creator: "@karaoglumuhendislik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "tr-TR": siteUrl,
    },
  },
  category: "construction",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karaoğlu Universal Mühendislik",
  alternateName: "Karaoğlu Mühendislik",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: "Van merkezli kamu müteahhidi. 2014'ten bu yana altyapı, üstyapı ve mühendislik projelerinde güvenilir çözüm ortağınız.",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Halilağa Mahallesi, Zübeyde Hanım Caddesi",
    addressLocality: "İpekyolu",
    addressRegion: "Van",
    postalCode: "65100",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-534-032-6569",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["Turkish"],
  },
  email: "info@karaoglumuhendislik.com.tr",
  sameAs: [
    "https://www.linkedin.com/company/karaoglu-muhendislik",
    "https://www.instagram.com/karaoglumuhendislik",
  ],
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  knowsAbout: [
    "Kamu Müteahhitliği",
    "Altyapı Projeleri",
    "Üstyapı Projeleri",
    "İnşaat Mühendisliği",
    "Bina İnşaatı",
  ],
};

// LocalBusiness Schema
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Karaoğlu Universal Mühendislik",
  image: `${siteUrl}/logo.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+90-534-032-6569",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Halilağa Mahallesi, Zübeyde Hanım Caddesi",
    addressLocality: "Van",
    addressRegion: "Van",
    postalCode: "65100",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.4891,
    longitude: 43.4089,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${roboto.variable} font-sans antialiased selection:bg-primary/30`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
