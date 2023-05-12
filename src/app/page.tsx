"use client";

import Marquee from "@/components/Marquee";
import Blob from "@/components/Blob";
import StaticBlob from "@/components/StaticBlob";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function HomePageText() {
  return (
    <main className="w-full h-max flex flex-col items-center dark:text-stone-200">
      <h1 className="text-3xl lg:text-5xl font-medium tracking-wide antialiased text-center px-12 pt-20 lg:px-64 lg:pt-36">
        <span className="font-semibold">Innovative </span>
        and <span className="font-semibold">Unique</span> sounds for your dream
        electronic music production
      </h1>
      <p className="text-lg lg:text-xl font-medium tracking-wide antialiased text-center px-12 pt-8 lg:px-64 lg:pt-20">
        Browse the collection of sample packs, synth sounds, and serum presets.
      </p>
      <p className="hidden md:flex text-lg lg:text-xl font-medium tracking-wide antialiased text-center px-12 lg:px-64">
        Perfect for any Electronic, House, Dance, or Pop track.
      </p>

      <div className="flex flex-row p-8 gap-8">
        <Link
          href="/shop"
          className="font-bold bg-blue-800 p-4 rounded-2xl text-white dark:text-stone-200"
        >
          Shop Sounds
        </Link>
        <div className="flex flex-row items-center">
          <Link href="/about" className="font-bold">
            Learn More{" "}
          </Link>
          <Icon icon="ic:sharp-arrow-right-alt" className="h-6 w-6 mt-1" />
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  if (window.matchMedia("(min-width: 701px)").matches) {
    //desktop
    return (
      <div className="overflow-hidden">
        <HomePageText />
        <Blob />
      </div>
    );
  } else {
    //mobile
    return (
      <div className="overflow-hidden">
        <StaticBlob />
        <HomePageText />
      </div>
    );
  }
}
