import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato e Localização | Agende sua Consulta – Dra. Maria Alice SP",
  description:
    "Agende sua consulta com a Dra. Maria Alice via WhatsApp. Clínica localizada na R. Voluntários da Pátria, 3744, Santana, São Paulo – SP. Atendimento de segunda a sexta, das 8h às 18h.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato e Localização | Agende sua Consulta – Dra. Maria Alice",
    description:
      "Clínica Dra. Maria Alice em Santana, Zona Norte de São Paulo. Agende pelo WhatsApp ou visite-nos na R. Voluntários da Pátria, 3744.",
    images: [{ url: "/clinica.jpg", alt: "Clínica Dra. Maria Alice – Santana, São Paulo" }],
  },
}
