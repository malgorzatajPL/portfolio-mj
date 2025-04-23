"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/about-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-5xl font-extrabold"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-red-700">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Have questions, feedback, or want to make a reservation? We’d love
            to hear from you. Our team is here to help and make sure your
            experience is unforgettable.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-red-600" />
              <span>London SW1A 0AA</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={22} className="text-red-600" />
              <a href="tel:+1234567890" className="hover:underline">
                +44 123 456 789
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={22} className="text-red-600" />
              <a
                href="mailto:hello@delishbites.com"
                className="hover:underline"
              >
                hello@delishbites.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.124414145395!2d-0.12623678425812045!3d51.500729418905254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cc9f82df75%3A0x30a0f1ddf3b7e6a!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1713782521339!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> 
        </motion.div>
      </section>
    </div>
  );
}
