import Image from "next/image";
import Marquee from "@/components/Marquee";
import DarkModeBtn from "@/components/DarkModeBtn";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center dark:text-stone-400">
      <h1 className="text-3xl font-medium tracking-wide antialiased text-center p-12">
        Sound Packs and Presets
      </h1>
      <div className="w-full h-full grid grid-cols-2 items-center justify-items-center lg:grid-cols-4 p-4 lg:p-12 gap-8">
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          1
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          2
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          3
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          4
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          5
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          6
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          7
        </div>
        <div className="h-48 w-36 lg:h-96 lg:w-72 bg-stone-400/30 flex items-center justify-center">
          8
        </div>
      </div>
    </main>
  );
}
