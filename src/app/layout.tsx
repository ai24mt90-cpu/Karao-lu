import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHomeButton from "@/components/FloatingHomeButton";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ContactClickTracker from "@/components/ContactClickTracker";
import { GOOGLE_PROFILE } from "@/lib/offices";
import I18nProvider from "@/components/I18nProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karaoglumuhendislik.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karaoğlu | Karaoğlu Universal Mühendislik Ltd. Şti.",
    template: "%s | Karaoğlu Universal Mühendislik",
  },
  description: "Karaoğlu Universal Mühendislik Ltd. Şti. Antalya merkezli, Ankara şubeli; Türkiye genelinde kamu altyapı ve mühendislik projeleri geliştiren bir firmadır.",
  keywords: [
    "Antalya kamu müteahhidi",
    "Antalya inşaat firması",
    "Antalya mühendislik firması",
    "Antalya mühendislik hizmetleri",
    "Antalya altyapı firmaları",
    "Ankara kamu müteahhidi",
    "Ankara mühendislik hizmetleri",
    "4734 sayılı kanun uzmanı",
    "kamu ihale danışmanlığı",
    "Antalya inşaat taahhüt",
    "Ankara inşaat taahhüt",
    "Karaoğlu Mühendislik referanslar",
    "depreme dayanıklı yapı Antalya",
    "zemin etüdü Antalya",
    "devlet ihaleleri müteahhit",
  ],
  authors: [{ name: "Karaoğlu Universal Mühendislik", url: siteUrl }],
  creator: "Karaoğlu Universal Mühendislik",
  publisher: "Karaoğlu Universal Mühendislik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Karaoğlu Universal Mühendislik",
    title: "Antalya Mühendislik Firması – Karaoğlu Universal Mühendislik",
    description: "Antalya merkezli, Ankara şubeli; kamu, konut ve altyapı projelerinde uzman mühendislik hizmetleri. Güvenilir ve sürdürülebilir çözümler.",
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
    description: "Antalya merkezli kamu müteahhidi. 2014'ten bu yana altyapı, üstyapı ve mühendislik projelerinde güvenilir çözüm ortağınız.",
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

  category: "construction",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karaoğlu Universal Mühendislik Ltd. Şti.",
  url: siteUrl,
  industry: "Engineering",
  areaServed: "Turkey",
  logo: `${siteUrl}/logo.png`,
  sameAs: [
    "https://www.linkedin.com/company/karaoglu-muhendislik",
    "https://www.instagram.com/karaogluuniversalmuhendislik/",
    GOOGLE_PROFILE.antalya,
    GOOGLE_PROFILE.ankara,
  ],
};

// LocalBusiness Schema - Multi Location
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": `${siteUrl}/#ankara-office`,
      hasMap: GOOGLE_PROFILE.ankara,
      name: "Karaoğlu Universal Mühendislik - Ankara Şube",
      image: `${siteUrl}/brand-icon-large.png`,
      url: siteUrl,
      telephone: "+90-532-673-6556",
      priceRange: "₺₺₺₺",
      description: "Ankara şubemiz: kamu altyapı, üstyapı ve mühendislik projelerinde teknik koordinasyon.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Next Level, Kızılırmak Mah. Dumlupınar Bulvarı No: 3C1/160, Kat: 29",
        addressLocality: "Çankaya",
        addressRegion: "Ankara",
        postalCode: "06530",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.9334,
        longitude: 32.8597,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    },
    {
      "@type": "GeneralContractor",
      "@id": `${siteUrl}/#antalya-office`,
      hasMap: GOOGLE_PROFILE.antalya,
      name: "Karaoğlu Universal Mühendislik - Antalya Merkez",
      image: `${siteUrl}/brand-icon-large.png`,
      url: siteUrl,
      telephone: "+90-532-673-6556",
      priceRange: "₺₺₺₺",
      description: "Antalya merkezli kamu müteahhidi. Altyapı, üstyapı ve mühendislik projelerinde güvenilir çözüm ortağınız.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Güzeloba Mah. Çağlayangil Caddesi No: 3B",
        addressLocality: "Muratpaşa",
        addressRegion: "Antalya",
        postalCode: "07230",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.8633,
        longitude: 30.7645,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google Analytics - Deferred for performance */}
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-EW7GQW0R23" />
        <script
          defer
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
        <I18nProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <FloatingHomeButton />
          <WhatsAppWidget />
          <ContactClickTracker />
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
