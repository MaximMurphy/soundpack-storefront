"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="absolute bottom-0 z-50 w-full h-fit flex flex-col justify-start gap-2">
      <div className="flex flex-row justify-between gap-2 px-4 lg:px-16 text-sm lg:text-base font-semibold tracking-wide antialiased text-stone-800 dark:text-stone-300">
        <p>© 2023 WAVFORM</p>
        <p className="animate-text bg-gradient-to-r from-[#242424] dark:from-stone-300 via-fuchsia-500 dark:via-fuchsia-600 to-[#242424] dark:to-stone-300 bg-clip-text text-transparent">
          Developed by{" "}
          <Link
            href="https://github.com/MaximMurphy"
            className="hover:underline decoration-1 underline-offset-2 decoration-stone-800 dark:decoration-stone-200"
          >
            Maxim Murphy
          </Link>
        </p>
      </div>
      <div className="h-8 w-full flex flex-row justify-between">
        <span className="bg-blue-800 w-full"> </span>
        <span className="bg-indigo-800 w-full"> </span>
        <span className="bg-violet-800 w-full"> </span>
        <span className="bg-fuchsia-800 w-full"> </span>
      </div>
    </div>
  );
}
