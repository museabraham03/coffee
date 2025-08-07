"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Policy Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">POLICY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">(949)281-6406</h3>
            <div className="space-y-2">
              <a href="http://instagram.com/endlessquestroasters/" className="block text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="http://facebook.com/endlessquestroasters" className="block text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">SIGN UP FOR OUR NEWSLETTER</h3>
            <div className="space-y-3">
              <Input
                placeholder="First name"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Input
                placeholder="Your email"
                type="email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" id="newsletter" className="rounded" />
                <label htmlFor="newsletter" className="text-gray-300">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Endless Quest Roasters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
