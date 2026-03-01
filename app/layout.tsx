import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joaopaulodetailer.com.br"),

  title: "João Paulo Detailer | Estética Automotiva em Praia Grande - SP",
  description:
    "Estética automotiva em Praia Grande - SP especializada em polimento técnico, vitrificação automotiva e detalhamento completo. Atendimento para toda a Baixada Santista.",

  keywords: [
    "estética automotiva em Praia Grande",
    "polimento automotivo Praia Grande",
    "vitrificação automotiva SP",
    "detalhamento automotivo Baixada Santista",
    "João Paulo Detailer",
  ],

  openGraph: {
    title: "João Paulo Detailer | Estética Automotiva em Praia Grande - SP",
    description:
      "Polimento técnico, vitrificação e detalhamento automotivo premium em Praia Grande e Baixada Santista.",
    url: "https://joaopaulodetailer.com.br",
    siteName: "João Paulo Detailer",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "João Paulo Detailer - Estética Automotiva em Praia Grande",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "João Paulo Detailer | Estética Automotiva",
    description:
      "Estética automotiva premium em Praia Grande - SP.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Schema LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness",
              name: "João Paulo Detailer",
              image:
                "https://joaopaulodetailer.com.br/og-image.jpg",
              url: "https://joaopaulodetailer.com.br",
              telephone: "+55 13 99626-3054",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Praia Grande",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Baixada Santista",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "5",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}