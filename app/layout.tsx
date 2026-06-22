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
  title: "NEXT LEVEL – Jugendbuchreihe von Daniel Feigenbutz",
  description:
    "Fünf Fremde. Sechs Wochen. Keine zweite Chance. Geschichten über Freundschaft, Mut, Vertrauen und die Frage, wer du sein möchtest, wenn niemand zuschaut.",
  keywords: ["Jugendbuch", "Next Level", "Daniel Feigenbutz", "Jugendroman"],
  authors: [{ name: "Daniel Feigenbutz" }],
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "32x32",  type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/favicon-192x192.png",sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "NEXT LEVEL – Jugendbuchreihe",
    description:
      "Fünf Fremde. Sechs Wochen. Keine zweite Chance. Ein Jugendroman von Daniel Feigenbutz.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXT LEVEL – Jugendbuchreihe",
    description: "Fünf Fremde. Sechs Wochen. Keine zweite Chance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0f1a]">{children}</body>
    </html>
  );
}
