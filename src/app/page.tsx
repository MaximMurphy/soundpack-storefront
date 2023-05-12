"use client";

import Image from "next/image";
import Marquee from "@/components/Marquee";
import { useEffect } from "react";
import Blob from "@/components/Blob";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center dark:text-stone-400">
      <h1 className="text-3xl font-medium text-center p-12">
        Sound Packs and Presets
      </h1>
      <Blob />
    </main>
  );
}
