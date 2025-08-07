"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://ext.same-assets.com/2369540931/2362745406.jpeg"
          alt="Coffee beans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 w-full">
        <motion.div
          className="text-left text-white max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 tracking-wider text-[#e6e1d7]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          SINGLE<br />
          ORIGIN
        </motion.h1>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-[#e6e1d7]"
          >
            Shop Now
          </Button>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
