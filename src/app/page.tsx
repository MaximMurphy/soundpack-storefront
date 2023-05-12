"use client";

import Image from "next/image";
import Marquee from "@/components/Marquee";
import { Component, useEffect } from "react";
import Blob from "@/components/Blob";
import { Icon } from "@iconify/react";

export function HomePageText() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center dark:text-stone-400">
      <h1 className="text-3xl lg:text-5xl font-mediumtracking-wide antialiased text-center px-12 pt-20 lg:px-64 lg:pt-36">
        <span className="font-semibold">Unique</span> and{" "}
        <span className="font-semibold">Innovative</span> sounds for your dream
        electronic music production
      </h1>
      <p className="text-lg lg:text-xl font-medium tracking-wide antialiased text-center px-12 pt-8 lg:px-64 lg:pt-20">
        Browse the collection of Electronic, House, & Dance sample packs, synth
        sounds, and serum presets.
      </p>
      <div className="flex flex-row p-8 gap-8">
        <button>Browse</button>
        <div className="flex flex-row">
          <button>Learn More </button>
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
      <>
        <HomePageText />
        <Blob />
      </>
    );
  } else {
    //mobile
    return <HomePageText />;
  }
}
