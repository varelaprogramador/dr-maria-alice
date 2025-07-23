import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppPopupButton } from "@/components/header-custom";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Alice | Clínica Médica",
  description: "Site oficial da Dra. Alice. Informações sobre biografia, tratamentos, exames especiais e agendamento de consultas.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>

        {children}
        <WhatsAppPopupButton />
      </body>
    </html>
  );
};

export default RootLayout;
