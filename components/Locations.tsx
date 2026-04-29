'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Phone, MapIcon } from 'lucide-react';

export default function Locations() {
  return (
    <section className="py-12 md:py-16 bg-[#FFF0F3]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#0D6E6E] mb-4">Visit Us</h2>
          <p className="text-[#555]">
            Dr. Abeera Ali is available at two convenient locations in Faisalabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full border-t-4 border-[#0D6E6E]"
          >
            <h3 className="text-xl font-bold text-[#0D6E6E] mb-4">SAAHIL Hospital</h3>
            
            <div className="space-y-4 flex-grow mb-6 text-sm text-gray-500">
              <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
                <MapPin className="w-5 h-5 text-[#C9956C] shrink-0" />
                <p>1-Sheikhupura Road, adjacent to Hotel East Inn, Faisalabad</p>
              </div>
              
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <Clock className="w-5 h-5 text-[#C9956C] shrink-0" />
                <p className="font-semibold text-gray-700">Open 24 Hours</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9956C] shrink-0" />
                <p>+92 320 6657377</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Saahil+Hospital+Faisalabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border-2 border-[#0D6E6E] text-[#0D6E6E] hover:bg-[#0D6E6E] hover:text-white font-bold text-sm flex justify-center items-center gap-2 transition-all"
            >
              <MapIcon className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full border-t-4 border-[#0D6E6E]"
          >
            <h3 className="text-xl font-bold text-[#0D6E6E] mb-4">Anmol Hospital</h3>
            
            <div className="space-y-4 flex-grow mb-6 text-sm text-gray-500">
              <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
                <MapPin className="w-5 h-5 text-[#C9956C] shrink-0" />
                <p>6 Altaf Ganj, Jhang Road, Faisalabad</p>
              </div>
              
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <Clock className="w-5 h-5 text-[#C9956C] shrink-0" />
                <p>Timings vary (Call to confirm)</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9956C] shrink-0" />
                <p>+92 320 6657377</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Anmol+Hospital+Faisalabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border-2 border-[#0D6E6E] text-[#0D6E6E] hover:bg-[#0D6E6E] hover:text-white font-bold text-sm flex justify-center items-center gap-2 transition-all"
            >
              <MapIcon className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
