'use client';

import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingElements() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/923206657377" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-green-500/50 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-medium hidden md:block">
            Chat with us
          </span>
        </a>

        {/* Phone Floating Button */}
        <a 
          href="tel:+923206657377" 
          className="w-12 h-12 bg-[#0D6E6E] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[#0D6E6E]/50 group"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-medium hidden md:block">
            Call Now
          </span>
        </a>
      </div>
    </>
  );
}
