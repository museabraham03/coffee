"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Phone, Mail, Wifi, Coffee, Users, Car } from "lucide-react";
import { fadeInUp, fadeIn } from "@/lib/animations";

// Location data - In a real app, this would come from an API
const locationData: Record<string, any> = {
  "laguna-beach": {
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
    description: "Our oceanside location offers stunning views of the Pacific Coast. Enjoy freshly roasted coffee while watching surfers and taking in the coastal atmosphere. This location features large windows overlooking the beach and outdoor seating perfect for enjoying the Southern California weather.",
    longDescription: "Located in the heart of artistic Laguna Beach, our coastal cafe embodies the relaxed beach culture while maintaining our commitment to exceptional coffee. The space features reclaimed wood furniture, local artwork, and floor-to-ceiling windows that showcase the stunning Pacific Ocean views. Whether you're starting your day with a sunrise coffee or enjoying an afternoon break from gallery hopping, our Laguna Beach location provides the perfect coastal coffee experience.",
    features: [
      { name: "Ocean Views", icon: "🌊", description: "Panoramic Pacific Ocean views from our large windows" },
      { name: "Outdoor Seating", icon: "☀️", description: "Covered patio seating with ocean breeze" },
      { name: "Wi-Fi", icon: "📶", description: "High-speed internet for remote work" },
      { name: "Pastries", icon: "🥐", description: "Fresh pastries and light meals daily" }
    ],
    amenities: [
      "Free Wi-Fi",
      "Outdoor Seating",
      "Beach Views",
      "Local Art Gallery",
      "Bike Parking",
      "Pet Friendly Patio"
    ],
    specialties: [
      "Cold Brew on Tap",
      "Seasonal Iced Drinks",
      "Local Pastries",
      "Surfboard Coffee Display"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.5!2d-117.7811!3d33.5427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzMzLjciTiAxMTfCsDQ2JzUyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890123"
  },
  "costa-mesa": {
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
    description: "Our flagship location and roastery headquarters. Watch our master roasters at work while enjoying the freshest coffee possible. This location houses our main roasting operation and offers coffee education classes.",
    longDescription: "As our flagship location and roastery headquarters, Costa Mesa represents the heart of Endless Quest Roasters. This expansive space features our main roasting operation behind glass walls, allowing customers to witness the artistry of coffee roasting firsthand. The industrial-chic design incorporates exposed brick, steel beams, and warm wood accents. Beyond serving exceptional coffee, this location serves as our education center, offering cupping sessions, brewing classes, and wholesale services to local businesses.",
    features: [
      { name: "Live Roasting", icon: "🔥", description: "Watch our roasters at work through glass walls" },
      { name: "Coffee Classes", icon: "📚", description: "Learn brewing techniques from our experts" },
      { name: "Wholesale", icon: "📦", description: "Business coffee supply services" },
      { name: "Cupping Room", icon: "☕", description: "Professional coffee tasting sessions" }
    ],
    amenities: [
      "Free Wi-Fi",
      "Meeting Rooms",
      "Roastery Tours",
      "Coffee Education",
      "Wholesale Services",
      "Private Events"
    ],
    specialties: [
      "Fresh Roasted Daily",
      "Coffee Cupping",
      "Barista Training",
      "Corporate Catering"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.5!2d-117.9186!3d33.6405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM4JzI1LjgiTiAxMTfCsDU1JzA2LjkiVw!5e0!3m2!1sen!2sus!4v1234567890123"
  },
  "corte-madera": {
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
    description: "Nestled in the heart of Marin County, our Corte Madera location offers a peaceful retreat with mountain views and artisanal coffee. Perfect for meetings, studying, or relaxing with friends.",
    longDescription: "Our Corte Madera location embodies the serene beauty of Marin County, offering a tranquil escape nestled among towering redwoods with stunning mountain views. This thoughtfully designed space features natural wood elements, large skylights, and comfortable seating areas that encourage both productivity and relaxation. The location serves as a community hub, hosting local art exhibitions, acoustic music sessions, and wellness events that reflect the area's culture of mindful living.",
    features: [
      { name: "Mountain Views", icon: "⛰️", description: "Stunning views of Mount Tamalpais" },
      { name: "Meeting Rooms", icon: "🏢", description: "Private spaces for business or study" },
      { name: "Local Art", icon: "🎨", description: "Rotating exhibitions from local artists" },
      { name: "Events Space", icon: "🎪", description: "Community events and workshops" }
    ],
    amenities: [
      "Free Wi-Fi",
      "Meeting Rooms",
      "Local Art Gallery",
      "Event Space",
      "Quiet Study Areas",
      "Electric Car Charging"
    ],
    specialties: [
      "Wellness Workshops",
      "Art Exhibitions",
      "Acoustic Sessions",
      "Book Club Meetings"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.5!2d-122.5088!3d37.9253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU1JzMxLjEiTiAxMjLCsDMwJzMxLjciVw!5e0!3m2!1sen!2sus!4v1234567890123"
  }
};

export default function LocationDetailPage() {
  const params = useParams();
  const router = useRouter();

  const locationId = params.id as string;
  const location = locationData[locationId];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <Button onClick={() => router.push("/locations")}>
            View All Locations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Locations
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden mb-12"
        >
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                {location.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {location.description}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Location</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {location.longDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {location.features.map((feature: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.name}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Directions</h2>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={location.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact & Hours</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{location.address}</p>
                        <p className="text-gray-600">{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <a href={`tel:${location.phone}`} className="text-gray-900 hover:text-amber-600">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <a href={`mailto:${location.email}`} className="text-gray-900 hover:text-amber-600">
                        {location.email}
                      </a>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Hours</p>
                        <p className="text-sm text-gray-600">Mon-Fri: {location.hours.weekdays}</p>
                        <p className="text-sm text-gray-600">Sat: {location.hours.saturday}</p>
                        <p className="text-sm text-gray-600">Sun: {location.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.amenities.map((amenity: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.9 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specialties</h3>
                  <ul className="space-y-2">
                    {location.specialties.map((specialty: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Coffee className="h-4 w-4 text-amber-600" />
                        <span className="text-gray-700">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
