import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHomeButton from "@/components/FloatingHomeButton";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karaoglumuhendislik.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karaoğlu Universal Mühendislik | Van Kamu İnşaat ve Taahhüt Firması",
    template: "%s | Karaoğlu Universal Mühendislik",
  },
  description: "Van ve bölgesinde 64+ kamu projesini başarıyla tamamlayan, 4734 sayılı kanuna hakim, altyapı ve üstyapı taahhüt firması. TOKİ, Valilik ve Belediye projelerinde güvenilir çözüm ortağınız.",
  keywords: [
    "Van mühendislik firması",
    "Van mühendislik hizmetleri",
    "Van kamu projeleri",
    "Van konut projeleri",
    "Van altyapı mühendislik",
    "kamu müteahhidi Van",
    "inşaat firması Van",
    "mühendislik şirketi Van",
    "altyapı projeleri Van",
    "üstyapı projeleri Van",
    "Karaoğlu Mühendislik",
    "Van mühendislik hizmetleri ücretsiz teklif",
    "Van kamu mühendislik projeleri referans",
    "Van konut proje mühendislik firması",
    "Van altyapı mühendislik çözümleri",
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
    icon: "/brand-icon.png",
    apple: "/brand-icon.png",
    shortcut: "/brand-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Karaoğlu Universal Mühendislik",
    title: "Van Mühendislik Firması – Karaoğlu Universal Mühendislik",
    description: "Van'da kamu, konut ve altyapı mühendislik projelerinde uzman mühendislik hizmetleri. Güvenilir ve sürdürülebilir çözümler.",
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
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE", // Search Console'dan alınacak
  // },
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
    streetAddress: "Hafiziye Mahallesi, Umman 1. Sokak No: 38, Kat: 3, Daire: 16",
    addressLocality: "İpekyolu",
    addressRegion: "Van",
    postalCode: "65130",
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
    streetAddress: "Hafiziye Mahallesi, Umman 1. Sokak No: 38, Kat: 3, Daire: 16",
    addressLocality: "İpekyolu",
    addressRegion: "Van",
    postalCode: "65130",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.4925,
    longitude: 43.3642,
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EW7GQW0R23" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EW7GQW0R23');
            `,
          }}
        />
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
        <FloatingHomeButton />
        <Footer />
      </body>
    </html>
  );
}
