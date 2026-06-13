import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Indiverse Enterprises | Building Intelligent Mobile & Cloud Solutions",
  description: "We develop Android apps, iOS applications, SaaS platforms, AI-powered systems, and enterprise software that help businesses scale faster.",
  keywords: [
    "Android App Development",
    "iOS App Development",
    "Flutter App Development",
    "SaaS Product Development",
    "Enterprise Software Development",
    "AI Solutions",
    "Cloud Solutions",
    "GPS Tracking Solutions",
    "ERP Systems",
    "Custom Software Development",
    "School ERP",
    "Indiverse Enterprises"
  ],
  metadataBase: new URL("https://www.indiverseenterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indiverse Enterprises | Building Intelligent Mobile & Cloud Solutions",
    description: "We develop Android apps, iOS applications, SaaS platforms, AI-powered systems, and enterprise software that help businesses scale faster.",
    url: "https://www.indiverseenterprises.com",
    siteName: "Indiverse Enterprises",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Indiverse Enterprises Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
