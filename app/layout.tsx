import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O Homem Inteiro | Sexualidade, Tantra e Prazer Compartilhado",
  description:
    "Um guia honesto e educativo para homens sobre presença, prazer, tantra, conexão e sexualidade masculina.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "O Homem Inteiro",
    description:
      "Da ansiedade de performance à presença plena. Um guia educativo para adultos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
