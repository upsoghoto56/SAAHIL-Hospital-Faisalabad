'use client';

import { motion } from 'motion/react';
import { Baby, HeartPulse, Stethoscope, Laptop, Building2, Pill } from 'lucide-react';

const services = [
  {
    icon: Baby,
    title: "Fertility Treatment",
    description: "Expert guidance and treatment for couples struggling to conceive.",
    accent: "text-[#C9956C]",
    bg: "bg-[#FFF0F3]"
  },
  {
    icon: HeartPulse,
    title: "Prenatal & Antenatal Care",
    description: "Complete pregnancy monitoring from first trimester to delivery.",
    accent: "text-[#0D6E6E]",
    bg: "bg-[#0D6E6E]/10"
  },
  {
    icon: Stethoscope,
    title: "Gynecological Consultations",
    description: "Diagnosis and treatment of all gynecological conditions.",
    accent: "text-[#C9956C]",
    bg: "bg-[#FFF0F3]"
  },
  {
    icon: Laptop,
    title: "Online Consultations",
    description: "Consult Dr. Abeera Ali from the comfort of your home.",
    accent: "text-[#0D6E6E]",
    bg: "bg-[#0D6E6E]/10"
  },
  {
    icon: Building2,
    title: "Normal & C-Section Delivery",
    description: "Safe delivery services available 24 hours at SAAHIL Hospital.",
    accent: "text-[#C9956C]",
    bg: "bg-[#FFF0F3]"
  },
  {
    icon: Pill,
    title: "Hormonal & PCOS Treatment",
    description: "Personalized treatment plans for hormonal imbalances and PCOS.",
    accent: "text-[#0D6E6E]",
    bg: "bg-[#0D6E6E]/10"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-[#FFF0F3]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#0D6E6E] mb-4">Our Services</h2>
          <p className="text-[#555]">
            Comprehensive care tailored to your unique health needs, delivered with compassion and highly-specialized medical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#0D6E6E] flex flex-col h-full"
              >
                <div className={`${service.bg} ${service.accent} p-3 w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0D6E6E] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 flex-grow leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
