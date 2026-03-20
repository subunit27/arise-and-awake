import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arise & Awake — Philosophy for the Modern Pioneer",
    template: "%s | Arise & Awake",
  },
  description:
    "Rooted in the teachings of Swami Vivekananda. Built for those who refuse to stop. Essays on goal-setting, spiritual ambition, mentorship, and living fully awake.",
  keywords: [
    "Swami Vivekananda",
    "arise awake",
    "philosophy",
    "goal setting",
    "spirituality",
    "personal growth",
    "inspiration",
    "pioneering spirit",
    "ancient wisdom",
    "modern ambition",
  ],
  authors: [{ name: "Arise & Awake" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arise & Awake",
    title: "Arise & Awake — Philosophy for the Modern Pioneer",
    description:
      "One light can light a million lights. Essays on the intersection of ancient wisdom and modern ambition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arise & Awake — Philosophy for the Modern Pioneer",
    description:
      "One light can light a million lights. Essays on the intersection of ancient wisdom and modern ambition.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
