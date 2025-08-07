"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function LocationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const locations = [
    {
      image: "https://ext.same-assets.com/2369540931/1008736270.jpeg",
      alt: "Laguna Beach location"
    },
    {
      image: "https://ext.same-assets.com/2369540931/3203715377.jpeg",
      alt: "Costa Mesa HQ location"
    },
    {
      image: "https://ext.same-assets.com/2369540931/3072035049.jpeg",
      alt: "Corte Madera location"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          LOCATIONS
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={location.image}
                  alt={location.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
