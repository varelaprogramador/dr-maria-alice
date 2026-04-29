import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppPopupButton } from "@/components/header-custom";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dramariaalice.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dra. Maria Alice | Medicina Integrativa em Santana, São Paulo",
    template: "%s | Dra. Maria Alice – Medicina Integrativa SP",
  },
  description:
    "Clínica da Dra. Maria Alice Fernandes de Miranda em Santana, Zona Norte de São Paulo. Especialista em Medicina Integrativa, Ortomolecular, Modulação Hormonal e Longevidade. Agende sua consulta pelo WhatsApp.",
  keywords: [
    "medicina integrativa",
    "medicina integrativa Santana",
    "medicina integrativa São Paulo",
    "ortomolecular Santana",
    "ortomolecular SP",
    "modulação hormonal São Paulo",
    "emagrecimento integrativo",
    "longevidade saudável",
    "Dra Maria Alice",
    "clínica médica Santana",
    "médico zona norte SP",
    "medicina funcional São Paulo",
    "fitoterapia SP",
    "envelhecimento saudável",
    "distúrbios do sono tratamento",
  ],
  authors: [{ name: "Dra. Maria Alice Fernandes de Miranda" }],
  creator: "Dra. Maria Alice Fernandes de Miranda",
  publisher: "Clínica Dra. Maria Alice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Dra. Maria Alice – Medicina Integrativa",
    title: "Dra. Maria Alice | Medicina Integrativa em Santana, São Paulo",
    description:
      "Clínica especializada em Medicina Integrativa, Ortomolecular e Modulação Hormonal em Santana, Zona Norte de São Paulo. Atendimento humanizado e personalizado.",
    images: [
      {
        url: "/dra.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Maria Alice Fernandes de Miranda – Médica Especialista em Medicina Integrativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Maria Alice | Medicina Integrativa – Santana, SP",
    description:
      "Clínica especializada em Medicina Integrativa, Ortomolecular e Modulação Hormonal em Santana, São Paulo.",
    images: ["/dra.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dra. Maria Alice Fernandes de Miranda",
      description:
        "Médica especialista em Medicina Integrativa, Ortomolecular, Modulação Hormonal e Longevidade Saudável. Atua em Santana, Zona Norte de São Paulo.",
      url: BASE_URL,
      telephone: "+55-11-99304-9032",
      image: `${BASE_URL}/dra.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Voluntários da Pátria, 3744",
        addressLocality: "Santana",
        addressRegion: "São Paulo",
        postalCode: "02402-400",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      medicalSpecialty: [
        "Medicina Integrativa",
        "Medicina Ortomolecular",
        "Modulação Hormonal",
        "Medicina Funcional",
      ],
      hasMap:
        "https://www.google.com/maps?q=R.+Voluntários+da+Pátria,+3744+-+Santana,+São+Paulo",
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: "São Paulo",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${BASE_URL}/#clinic`,
      name: "Clínica Dra. Maria Alice Fernandes de Miranda",
      url: BASE_URL,
      telephone: "+55-11-99304-9032",
      description:
        "Clínica de Medicina Integrativa localizada em Santana, Zona Norte de São Paulo. Especializada em Longevidade Saudável, Ortomolecular e Medicina Funcional.",
      image: `${BASE_URL}/clinica.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Voluntários da Pátria, 3744",
        addressLocality: "Santana",
        addressRegion: "São Paulo",
        postalCode: "02402-400",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.4945,
        longitude: -46.6311,
      },
      hasMap:
        "https://www.google.com/maps?q=R.+Voluntários+da+Pátria,+3744+-+Santana,+São+Paulo",
    },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <head>
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <WhatsAppPopupButton />
      </body>
    </html>
  );
};

export default RootLayout;
