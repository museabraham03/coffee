"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Mexico Familia Giron",
      price: "$24.00",
      image: "https://ext.same-assets.com/2369540931/754217230.jpeg",
      badge: "New Arrival",
      badgeColor: "bg-green-600"
    },
    {
      id: 2,
      name: "Ethiopia Yirgz Honey",
      price: "$24.00",
      image: "https://ext.same-assets.com/2369540931/1588927536.png",
      badge: "New Arrival",
      badgeColor: "bg-green-600"
    },
    {
      id: 3,
      name: "Indonesia Gayo Wine Process",
      price: "$26.00",
      image: "https://ext.same-assets.com/2369540931/64075836.png",
      badge: "LATEST ARRIVAL",
      badgeColor: "bg-red-600"
    },
    {
      id: 4,
      name: "Colombia Geisha",
      price: "$19.00",
      image: "https://ext.same-assets.com/2369540931/3710780823.jpeg",
      badge: "New Arrival",
      badgeColor: "bg-green-600"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Guatemala Feature Product */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden group">
            <img
              src="https://ext.same-assets.com/2369540931/2338495005.jpeg"
              alt="Guatemala coffee"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 h-full"
                onClick={() => handleProductClick(product.id)}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className={`absolute top-4 left-4 px-3 py-1 text-white text-sm font-semibold rounded ${product.badgeColor}`}>
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900 mb-4">
                      {product.price}
                    </p>
                    <Button
                      className="w-full"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
