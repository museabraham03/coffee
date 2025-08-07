"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, Coffee, Thermometer, Clock, Target } from "lucide-react";
import { fadeInUp, fadeIn } from "@/lib/animations";

// Product data - In a real app, this would come from an API
const productData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Mexico Familia Giron",
    price: "$24.00",
    image: "https://ext.same-assets.com/2369540931/754217230.jpeg",
    badge: "New Arrival",
    badgeColor: "bg-green-600",
    description: "A rich and complex coffee from the highlands of Chiapas, Mexico. The Familia Giron has been growing coffee for over three generations, using traditional methods that have been passed down through their family. This coffee offers notes of dark chocolate, caramel, and a hint of orange zest.",
    origin: "Chiapas, Mexico",
    altitude: "1,400-1,600m",
    process: "Washed",
    variety: "Bourbon, Caturra",
    tastingNotes: ["Dark Chocolate", "Caramel", "Orange Zest", "Medium Body"],
    brewingGuide: {
      grindSize: "Medium-Fine",
      waterTemp: "195-205°F",
      brewTime: "4-6 minutes",
      ratio: "1:15-1:17"
    }
  },
  "2": {
    id: 2,
    name: "Ethiopia Yirgz Honey",
    price: "$24.00",
    image: "https://ext.same-assets.com/2369540931/1588927536.png",
    badge: "New Arrival",
    badgeColor: "bg-green-600",
    description: "From the birthplace of coffee comes this exceptional honey-processed Ethiopian coffee. Grown at high altitudes in the Yirgacheffe region, this coffee showcases the unique terroir with bright acidity and complex floral notes that Ethiopia is famous for.",
    origin: "Yirgacheffe, Ethiopia",
    altitude: "1,700-2,200m",
    process: "Honey Process",
    variety: "Heirloom Varieties",
    tastingNotes: ["Floral", "Bergamot", "Honey", "Bright Acidity"],
    brewingGuide: {
      grindSize: "Medium",
      waterTemp: "200-205°F",
      brewTime: "4-5 minutes",
      ratio: "1:16-1:18"
    }
  },
  "3": {
    id: 3,
    name: "Indonesia Gayo Wine Process",
    price: "$26.00",
    image: "https://ext.same-assets.com/2369540931/64075836.png",
    badge: "LATEST ARRIVAL",
    badgeColor: "bg-red-600",
    description: "An innovative wine-processed coffee from the Gayo highlands of Sumatra. This unique processing method involves fermenting the coffee cherries in their own juices, creating a complex flavor profile with wine-like characteristics that coffee enthusiasts seek out.",
    origin: "Gayo, Sumatra",
    altitude: "1,200-1,500m",
    process: "Wine Process",
    variety: "Catimor, Typica",
    tastingNotes: ["Wine-like", "Berry", "Tropical Fruit", "Full Body"],
    brewingGuide: {
      grindSize: "Coarse",
      waterTemp: "190-200°F",
      brewTime: "6-8 minutes",
      ratio: "1:14-1:16"
    }
  },
  "4": {
    id: 4,
    name: "Colombia Geisha",
    price: "$19.00",
    image: "https://ext.same-assets.com/2369540931/3710780823.jpeg",
    badge: "New Arrival",
    badgeColor: "bg-green-600",
    description: "The legendary Geisha variety, originally from Ethiopia but perfected in the mountains of Colombia. This coffee is known for its tea-like body, exceptional clarity, and remarkable flavor complexity that has made it one of the most sought-after coffees in the world.",
    origin: "Huila, Colombia",
    altitude: "1,800-2,000m",
    process: "Washed",
    variety: "Geisha",
    tastingNotes: ["Jasmine", "Tropical Fruit", "Tea-like", "Exceptional Clarity"],
    brewingGuide: {
      grindSize: "Medium",
      waterTemp: "200-205°F",
      brewTime: "3-4 minutes",
      ratio: "1:17-1:19"
    }
  }
};

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();

  const productId = params.id as string;
  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => router.push("/")}>
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

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
            Back to Shop
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              <div className={`absolute top-4 left-4 px-3 py-1 text-white text-sm font-semibold rounded ${product.badgeColor}`}>
                {product.badge}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                {product.price}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Origin</h3>
                <p className="text-gray-600">{product.origin}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Altitude</h3>
                <p className="text-gray-600">{product.altitude}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Process</h3>
                <p className="text-gray-600">{product.process}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Variety</h3>
                <p className="text-gray-600">{product.variety}</p>
              </div>
            </div>

            {/* Tasting Notes */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Tasting Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes.map((note: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full lg:w-auto px-8"
                onClick={handleAddToCart}
              >
                Add to Cart - {product.price}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Brewing Guide */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Coffee className="h-6 w-6 mr-3 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Brewing Guide</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Grind Size</h3>
                  <p className="text-gray-600">{product.brewingGuide.grindSize}</p>
                </div>

                <div className="text-center">
                  <Thermometer className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Water Temp</h3>
                  <p className="text-gray-600">{product.brewingGuide.waterTemp}</p>
                </div>

                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Brew Time</h3>
                  <p className="text-gray-600">{product.brewingGuide.brewTime}</p>
                </div>

                <div className="text-center">
                  <Coffee className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Ratio</h3>
                  <p className="text-gray-600">{product.brewingGuide.ratio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
