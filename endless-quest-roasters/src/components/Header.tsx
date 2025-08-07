"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Cart } from "@/components/Cart";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const { scrollToSection } = useSmoothScroll();
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handlePageNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => pathname === '/' ? handleNavClick('home') : router.push('/')}
                className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
              >
                ENDLESS QUEST
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => pathname === '/' ? handleNavClick('home') : router.push('/')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => pathname === '/' ? handleNavClick('products') : router.push('/#products')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Shop
              </button>
              <button
                onClick={() => handlePageNavigation('/locations')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Locations
              </button>
              <button
                onClick={() => handlePageNavigation('/contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Cart Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 hover:bg-gray-100 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <Cart open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
