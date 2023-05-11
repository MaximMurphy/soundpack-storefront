import Image from "next/image";
import Marquee from "@/components/Marquee";
import DarkModeBtn from "@/components/DarkModeBtn";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center p-24 gap-12">
      <div className="flex flex-col items-center gap-36">
        <h1 className="text-3xl font-medium tracking-wide antialiased">
          Hello World
        </h1>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </main>
  );
}
