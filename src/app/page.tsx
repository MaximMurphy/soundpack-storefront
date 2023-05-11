import Image from "next/image";
import Marquee from "@/components/Marquee";
import DarkModeBtn from "@/components/DarkModeBtn";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center dark:text-stone-400">
      <h1 className="text-3xl font-medium tracking-wide antialiased text-center p-12">
        Sound Packs and Presets
      </h1>
    </main>
  );
}
