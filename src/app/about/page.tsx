"use client";

import Marquee from "@/components/Marquee";
import MyDisclosure from "@/components/disclosure";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute overflow-hidden top-4 lg:top-8">
        <Marquee />
      </div>
      <div className="absolute top-24 lg:top-16 flex flex-col justify-center pt-8 lg:pt-16">
        <div className="flex flex-col items-center justify-center text-center font-medium tracking-wide px-12 lg:px-64 gap-8">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Welcome to WAVFORM!
          </h1>
          <p className="text-base lg:text-lg">
            We are passionate about creative electronic music production and
            wish to share that with everyone. Our goal is to create unique and
            pristine sounds for you to use in your own music production.
          </p>
          <a
            href="mailto:maxim.murphy8@gmail.com"
            className="text-base lg:text-lg hover:underline decoration-1 underline-offset-2"
          >
            Contact us with any questions
          </a>
          <div className="hidden md:flex">
            <MyDisclosure />
          </div>
        </div>
        <Image
          src="/sound2.jpg"
          alt="Sound Waves"
          height={1000}
          width={1000}
          className="w-full lg:hidden dark:invert"
        />
      </div>
      <div className="absolute overflow-hidden bottom-0 pb-24 lg:pb-32">
        <Marquee />
      </div>
    </section>
  );
}
