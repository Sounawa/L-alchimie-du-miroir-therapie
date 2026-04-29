import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "L'Alchimie du Miroir — Manuel de Protocoles de Méditation Thérapeutique",
  description:
    "Approches Intégratives des Traumatismes et des Émotions pour Accompagner Tout Être Humain Vers Sa Renaissance Intérieure. Guide Professionnel de Santé Mentale.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${amiri.variable} ${cormorant.variable} ${inter.variable} ${notoNaskh.variable} antialiased`}
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          background: "#0D1117",
          color: "#E8E4DC",
          lineHeight: "1.8",
          fontSize: "17px",
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
