import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import { Suspense } from "react";
import Providers from "./Providers";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Sound Packs",
  description: "Electronic Music Sounds and Presets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
