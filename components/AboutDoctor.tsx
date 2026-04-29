'use client';

import { motion } from 'motion/react';
import { Baby, Video, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutDoctor() {
  return (
    <section id="about" className="py-12 md:py-16 bg-[#FFF0F3]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="bg-[#0D6E6E] p-8 md:p-10 rounded-3xl text-white flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg">
          
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 relative rounded-2xl border-4 border-[#C9956C] flex-shrink-0 bg-gray-200 overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="https://picsum.photos/seed/doctor/600/800" 
              alt="Dr. Abeera Ali Profile" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-white">Meet Dr. Abeera Ali</h2>
              <p className="text-sm md:text-base opacity-90 leading-relaxed italic text-[#C9956C] mb-4">MBBS, FCPS Gynecology. Compassionate fertility and pregnancy expert in Faisalabad.</p>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                Dr. Abeera Ali is one of Faisalabad&apos;s most trusted gynecologists, practicing at SAAHIL Hospital and Anmol Hospital. Known for her compassionate care, deep expertise in fertility treatments, and patient-first approach, she has helped hundreds of families achieve their dream of parenthood.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/20">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#C9956C]">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">Fertility & Conception Expert</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#C9956C]">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">Online & In-Person Consultations</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#C9956C]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">265+ Satisfied Patients</h4>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
