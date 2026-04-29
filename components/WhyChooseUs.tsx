'use client';

import { motion } from 'motion/react';

const stats = [
  { value: "265+", label: "Happy Patients" },
  { value: "5.0 ⭐", label: "Google Rating" },
  { value: "24/7", label: "Hospital Open" },
  { value: "2", label: "Locations in Faisalabad" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0D6E6E] py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border-8 border-white/10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0a5c5c] opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Why Patients Choose Dr. Abeera Ali</h2>
          <div className="h-1.5 w-20 bg-[#C9956C] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                {stat.value}
              </div>
              <div className="text-[#FFF0F3] font-medium text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
