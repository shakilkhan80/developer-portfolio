import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/provider/toaster";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import TanstackProvider from "../provider/api";
import "./globals.css";

const inter = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shakil Khan | Web Developer",
  description: "Shakil Khan | Web Developer",
  keywords: [
    "Shakil Khan",
    "web developer",
    "frontend developer",
    "backend developer",
    "react developer",
    "nextjs developer",
    "tailwind developer",
    "laravel developer",
    "php developer",
    "khan shaheb",
    "cricketer ",
    "programmer",
  ],
  metadataBase: new URL("https://khan-shaheb-portfolio.vercel.app/"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F0F0F]`}>
        <TanstackProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastProvider />
        </TanstackProvider>
      </body>
    </html>
  );
}
