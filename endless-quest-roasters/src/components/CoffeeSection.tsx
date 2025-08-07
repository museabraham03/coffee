"use client";

import { Button } from "@/components/ui/button";

export function CoffeeSection() {
  return (
    <section className="relative py-32 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ext.same-assets.com/2369540931/333517625.png"
          alt="Coffee setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <p className="text-lg md:text-xl mb-4 tracking-wider">
          COFFEE JUST GOT BETTER
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider leading-tight">
          FRESHLY ROASTED<br />
          SINGLE ORIGIN
        </h2>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
        >
          Shop Sale
        </Button>
      </div>
    </section>
  );
}
