"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useRouter } from "next/navigation";

const locations = [
  {
    id: "laguna-beach",
    name: "Laguna Beach",
    image: "https://ext.same-assets.com/2369540931/1008736270.jpeg",
    address: "610 N. Coast Hwy Suite 100",
    city: "Laguna Beach, CA 92651",
    phone: "(949) 281-6406",
    email: "laguna@endlessquestroasters.com",
    hours: {
      weekdays: "6:00 AM - 7:00 PM",
      saturday: "6:00 AM - 8:00 PM",
      sunday: "7:00 AM - 6:00 PM"
    },
    description: "Our oceanside location offers stunning views of the Pacific Coast. Enjoy freshly roasted coffee while watching surfers and taking in the coastal atmosphere.",
    features: ["Ocean Views", "Outdoor Seating", "Wi-Fi", "Pastries"]
  },
  {
    id: "costa-mesa",
    name: "Costa Mesa HQ",
    image: "https://ext.same-assets.com/2369540931/3203715377.jpeg",
    address: "1814 Monrovia Ave",
    city: "Costa Mesa, CA 92627",
    phone: "(949) 281-6406",
    email: "hq@endlessquestroasters.com",
    hours: {
      weekdays: "5:30 AM - 8:00 PM",
      saturday: "6:00 AM - 8:00 PM",
      sunday: "6:30 AM - 7:00 PM"
    },
    description: "Our flagship location and roastery headquarters. Watch our master roasters at work while enjoying the freshest coffee possible.",
    features: ["Live Roasting", "Coffee Classes", "Wholesale", "Cupping Room"]
  },
  {
    id: "corte-madera",
    name: "Corte Madera",
    image: "https://ext.same-assets.com/2369540931/3072035049.jpeg",
    address: "47C Tamal Vista Blvd",
    city: "Corte Madera, CA 94925",
    phone: "(415) 924-7890",
    email: "corte@endlessquestroasters.com",
    hours: {
      weekdays: "6:00 AM - 7:00 PM",
      saturday: "6:30 AM - 8:00 PM",
      sunday: "7:00 AM - 6:00 PM"
    },
    description: "Nestled in the heart of Marin County, our Corte Madera location offers a peaceful retreat with mountain views and artisanal coffee.",
    features: ["Mountain Views", "Meeting Rooms", "Local Art", "Events Space"]
  }
];

export default function LocationsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            OUR LOCATIONS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at any of our three California locations. Each offers a unique
            atmosphere while maintaining our commitment to exceptional coffee quality.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div ref={ref}>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {locations.map((location) => (
              <motion.div key={location.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    {/* Location Image */}
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute bottom-4 left-4">
                        <h2 className="text-2xl font-bold text-white">
                          {location.name}
                        </h2>
                      </div>
                    </div>

                    {/* Location Details */}
                    <div className="p-6 space-y-4">
                      <p className="text-gray-600">
                        {location.description}
                      </p>

                      {/* Address */}
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">{location.address}</p>
                          <p className="text-gray-600">{location.city}</p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Hours</p>
                          <p className="text-sm text-gray-600">Mon-Fri: {location.hours.weekdays}</p>
                          <p className="text-sm text-gray-600">Sat: {location.hours.saturday}</p>
                          <p className="text-sm text-gray-600">Sun: {location.hours.sunday}</p>
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <p className="text-gray-600">{location.phone}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Features</p>
                        <div className="flex flex-wrap gap-2">
                          {location.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <Button
                        className="w-full mt-6"
                        onClick={() => router.push(`/locations/${location.id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Questions About Our Locations?
              </h2>
              <p className="text-gray-600 mb-8">
                Contact us for more information about hours, events, or special services at any location.
              </p>
              <Button size="lg" onClick={() => router.push("/contact")}>
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
