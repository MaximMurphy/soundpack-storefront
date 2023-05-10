"use client";

export default function Navbar() {
  return (
    <section className="z-50 sticky bg-white/80 backdrop-blur-sm top-0 flex flex-row justify-between p-8">
      <div className="flex flex-row text-lg gap-8">
        <p>ABOUT</p>
        <p>SHOP</p>
        <p>CONTACT</p>
      </div>
      <p className="text-3xl">DIGITAL</p>
      <div className="flex flex-row text-lg gap-8">
        <p>LOGIN</p>
        <p>WISHLIST</p>
        <p>CART</p>
      </div>
    </section>
  );
}
