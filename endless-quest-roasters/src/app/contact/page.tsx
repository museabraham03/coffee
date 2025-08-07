"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

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
            CONTACT US
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our coffee, locations, or services? We'd love to hear from you.
            Reach out and let's start a conversation about great coffee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? "border-red-500" : ""}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? "border-red-500" : ""}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={errors.subject ? "border-red-500" : ""}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={errors.message ? "border-red-500" : ""}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* General Contact */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:hello@endlessquestroasters.com" className="text-gray-600 hover:text-amber-600">
                          hello@endlessquestroasters.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Phone className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a href="tel:(949)281-6406" className="text-gray-600 hover:text-amber-600">
                          (949) 281-6406
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-gray-600">We typically respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Locations Quick Contact */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Our Locations</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Laguna Beach</h4>
                      <div className="flex items-start space-x-3 text-sm">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div className="text-gray-600">
                          <p>610 N. Coast Hwy Suite 100</p>
                          <p>Laguna Beach, CA 92651</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Costa Mesa HQ</h4>
                      <div className="flex items-start space-x-3 text-sm">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div className="text-gray-600">
                          <p>1814 Monrovia Ave</p>
                          <p>Costa Mesa, CA 92627</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Corte Madera</h4>
                      <div className="flex items-start space-x-3 text-sm">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div className="text-gray-600">
                          <p>47C Tamal Vista Blvd</p>
                          <p>Corte Madera, CA 94925</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6"
                    variant="outline"
                    onClick={() => window.location.href = '/locations'}
                  >
                    View All Locations
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Inquiries */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Inquiries</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in wholesale, catering, or partnership opportunities?
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Wholesale:</strong> wholesale@endlessquestroasters.com
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Catering:</strong> catering@endlessquestroasters.com
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Press:</strong> press@endlessquestroasters.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
