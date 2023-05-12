import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className="w-full min-h-screen scroll-smooth flex flex-col justify-between gap-8 pb-24 lg:pb-40">
      <Marquee />
      <div className="flex flex-col items-center justify-center">
        <h1>Hello </h1>
        <p>Contact us with any questions</p>
      </div>
      <Marquee />
    </div>
  );
}
