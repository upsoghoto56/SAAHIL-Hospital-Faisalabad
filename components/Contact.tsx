'use client';

import { motion } from 'motion/react';
import { MessageCircle, Clock, MapPin, Search } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FFF0F3]">
      <div className="container mx-auto max-w-7xl px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Book an Appointment</h2>
          <div className="h-1.5 w-20 bg-[#0D6E6E] rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Schedule your visit or reach out to us for any concerns. We are here to support you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Form Column */}
          <motion.div 
            className="flex-1 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-white/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message Request</h3>
            
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert("Your message has been sent successfully. We will contact you soon.");
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D6E6E]/50 focus:border-[#0D6E6E] transition-all bg-slate-50"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D6E6E]/50 focus:border-[#0D6E6E] transition-all bg-slate-50"
                  placeholder="e.g. 0320 6657377"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Concern / Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D6E6E]/50 focus:border-[#0D6E6E] transition-all bg-slate-50 resize-none"
                  placeholder="Briefly describe your concern or the service you need..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-[#0D6E6E] hover:bg-[#095252] text-white rounded-xl font-bold text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

              <div className="pt-4 text-center border-t border-slate-100">
                <p className="text-slate-500 text-sm">
                  Or call us directly for an immediate appointment: <br/>
                  <a href="tel:+923206657377" className="font-bold text-[#0D6E6E] hover:underline mt-1 inline-block">+92 320 6657377</a>
                </p>
              </div>
            </form>
          </motion.div>
          
          {/* Info Column */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/923206657377" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20b858] text-white rounded-3xl p-8 flex items-center gap-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Chat on WhatsApp</h4>
                <p className="text-white/90 text-sm">Fastest way to get in touch. We respond quickly!</p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0D6E6E]/10 p-3 rounded-full text-[#0D6E6E]">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl text-slate-900">Working Hours</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-slate-600 border-b border-slate-50 pb-3">
                  <span className="font-medium">Monday - Sunday</span>
                  <span className="font-bold text-[#0D6E6E] bg-[#0D6E6E]/10 px-3 py-1 rounded-full text-sm">Open 24 Hours</span>
                </li>
                <li className="flex justify-between items-center text-slate-600">
                  <span className="font-medium">Emergency Cases</span>
                  <span className="text-[#C9956C] font-semibold text-sm">Available 24/7</span>
                </li>
              </ul>
            </div>

            {/* Google Maps Placeholder */}
            <div className="bg-slate-200 h-48 rounded-3xl w-full border border-slate-300 flex flex-col items-center justify-center p-6 text-center text-slate-500 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'
               }}></div>
               <div className="relative z-10 flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-slate-400" />
                <p className="font-medium">Map: SAAHIL Hospital, Sheikhupura Road, Faisalabad</p>
                <div className="text-xs mt-2 px-4 py-2 bg-white/80 rounded-full shadow-sm flex items-center gap-2">
                  <Search className="w-3 h-3"/> Click &apos;Get Directions&apos; to view on Google Maps
                </div>
               </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
