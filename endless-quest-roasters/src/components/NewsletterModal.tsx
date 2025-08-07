"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 bg-gray-100 border-none">
        <div className="flex">
          {/* Left side - Form */}
          <div className="flex-1 p-8">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <DialogTitle className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Get the Latest News to<br />
              Your Inbox
            </DialogTitle>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  className="w-full"
                  placeholder=""
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter-modal"
                  className="rounded"
                />
                <label htmlFor="newsletter-modal" className="text-sm text-gray-700">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="flex-1">
            <img
              src="https://ext.same-assets.com/2369540931/3369024200.png"
              alt="Coffee cup"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
