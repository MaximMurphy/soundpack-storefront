import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className="w-full min-full flex flex-col justify-center pt-8 lg:pt-16 gap-24">
      <Marquee />
      <div className="flex flex-col items-center justify-center text-center font-medium tracking-wide px-12 lg:px-64 gap-8">
        <h1 className="text-xl lg:text-2xl font-semibold">
          Welcome to WAVFORM!
        </h1>
        <p className="text-base lg:text-lg">
          We are passionate about creative electronic music production and wish
          to share that with everyone. Our goal is to create unique and pristine
          sounds for you to use in your own music production.
        </p>
        <a
          href="mailto:maxim.murphy8@gmail.com"
          className="text-base lg:text-lg hover:underline decoration-1 underline-offset-2"
        >
          Contact us with any questions
        </a>
      </div>
      <Marquee />
    </div>
  );
}
