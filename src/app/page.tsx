"use client";

import Blob from "@/components/Blob";
import StaticBlob from "@/components/StaticBlob";
import Link from "next/link";

const HomePageText = () => {
  return (
    <section className="w-full h-max flex flex-col items-center dark:text-stone-200">
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
          href="/products"
          className="font-bold bg-blue-800 dark:bg-indigo-800 p-4 rounded-2xl text-white dark:text-stone-200"
        >
          Shop Sounds
        </Link>
        <div className="flex flex-row items-center">
          <Link href="/about" className="font-bold">
            Learn More{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  if (typeof window !== "undefined") {
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
}
