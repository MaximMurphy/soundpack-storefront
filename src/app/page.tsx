import Image from "next/image";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12">
      <h1 className="text-3xl font-medium tracking-wide antialiased">
        Hello World
      </h1>
      <Marquee />
    </main>
  );
}
