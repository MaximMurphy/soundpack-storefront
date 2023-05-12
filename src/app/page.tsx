"use client";

import Image from "next/image";
import Marquee from "@/components/Marquee";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const blob: any = document.getElementById("blob");
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center dark:text-stone-400">
      <h1 className="text-3xl font-medium text-center p-12">
        Sound Packs and Presets
      </h1>
      <div
        id="blob"
        className="bg-gradient-to-r from-blue-600/10 to-fuchsia-600/10 h-[50rem] w-[50rem] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full blur-[200px]"
      ></div>
    </main>
  );
}
