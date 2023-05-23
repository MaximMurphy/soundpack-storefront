import "./globals.css";
import { Manrope } from "next/font/google";
import Providers from "./Providers";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

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
      <body
        className={`${manrope.className} scroll-smooth tracking-wide antialiased overflow-x-hidden relative min-h-screen`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
