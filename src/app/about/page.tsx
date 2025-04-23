'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/about-hero.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-5xl font-extrabold"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-red-700">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Delish Bites, we believe food is more than just nourishment – it`&apos;`s a way to bring people together.
              Our journey started with a passion for bold flavors, fresh ingredients, and unforgettable experiences.
              Whether you`&apos;`re grabbing a quick bite or enjoying a night out, we’re here to serve comfort food with a gourmet twist.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/about-hero2.jpeg"
              alt="Our kitchen"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <Image
                src="/about-hero3.jpeg"
              alt="Team cooking"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-red-700">Meet the Team</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our chefs bring years of culinary experience and creativity to every dish.
              With a commitment to quality, they prepare meals that not only satisfy hunger, but spark joy.
              Our entire staff shares a love of good food and good people — and we can’t wait to serve you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-red-700">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            From farm-fresh ingredients to a cozy dining atmosphere, Delish Bites offers a unique experience for every guest.
            Our mission is simple: serve incredible food, and do it with heart.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/about-hero4.jpeg"
            alt="Dining experience"
            width={800}
            height={500}
            className="rounded-xl shadow-xl mx-auto"
          />
        </motion.div>
      </section>
    </div>
  );
}
