'use client';

import { motion } from 'motion/react';
import { Calendar, Phone, Star, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-[#FFF0F3]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row items-stretch gap-8">
        <motion.div 
          className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-sm flex flex-col justify-center border-l-8 border-[#C9956C]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 mb-8">
            <span className="text-[#C9956C] font-semibold tracking-wider text-[10px] md:text-xs uppercase hidden">Welcome to Saahil Hospital</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D6E6E] leading-tight">
              Faisalabad&apos;s Most Trusted Gynecologist
            </h1>
            <p className="text-lg text-[#555] max-w-2xl">
              Dr. Abeera Ali — Caring for Women at Every Stage of Life
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a 
              href="#contact" 
              className="bg-[#0D6E6E] text-white px-6 py-3 rounded-full text-[13px] md:text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
            <a 
              href="tel:+923206657377" 
              className="border-2 border-[#C9956C] text-[#C9956C] hover:bg-[#C9956C] hover:text-white px-6 py-3 rounded-full text-[13px] md:text-sm font-bold transition-all"
            >
              Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-[#0D6E6E]">⭐ 5.0</div>
              <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mt-1">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-[#0D6E6E]">265+</div>
              <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mt-1">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-[#0D6E6E]">24/7</div>
              <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mt-1">Available</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative elements behind image */}
          <div className="absolute inset-0 bg-[#0D6E6E]/10 rounded-[4rem] transform translate-x-4 translate-y-4 z-0"></div>
          <div className="absolute inset-0 bg-[#C9956C]/10 rounded-[4rem] transform -translate-x-4 -translate-y-4 z-0"></div>
          
          <div className="relative z-10 w-full h-full rounded-[4rem] bg-white shadow-xl overflow-hidden border-8 border-white flex flex-col items-center justify-center bg-slate-100/50">
             {/* Using placeholder as requested, with a clinical/gynecology related abstract or gentle visual since we don't have a specific Dr. image */}
            <Image 
               src="https://picsum.photos/seed/gynecology/800/1000" 
               alt="Dr. Abeera Ali" 
               fill 
               className="object-cover"
               referrerPolicy="no-referrer"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">MBBS, FCPS Gynecology</p>
                <p className="text-xs text-slate-500">Board Certified Specialist</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
