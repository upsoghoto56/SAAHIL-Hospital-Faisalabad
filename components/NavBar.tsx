'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4 shadow-md'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex flex-col select-none">
          <span className="text-xl font-bold text-[#0D6E6E] leading-tight">SAAHIL Hospital</span>
          <span className="text-[10px] text-[#C9956C] font-medium tracking-wide uppercase">Dr. Abeera Ali | Gynecologist</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0D6E6E] hover:text-[#C9956C] font-semibold text-[13px] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0D6E6E] hover:bg-[#095252] text-white px-5 py-2 rounded-full text-[13px] font-bold transition-colors shadow-sm ml-2"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg absolute w-full left-0 origin-top"
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 font-medium text-lg hover:text-[#0D6E6E]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#0D6E6E] text-white text-center px-6 py-3 rounded-full font-medium shadow-md mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
