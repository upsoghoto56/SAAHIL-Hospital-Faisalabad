'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Munazza S.",
    text: "Dr Abeera is truly an amazing doctor. After following her treatment, I am blessed with a baby. She is very kind, supportive, and always listens to her patients. Highly recommend for fertility treatment.",
    time: "1 month ago",
    stars: 5,
    initial: "M"
  },
  {
    name: "Dawood Faiz",
    text: "We have been seeing Dr. Abeera for over six months while trying to conceive. We are truly grateful for her exceptional care and support throughout the journey.",
    time: "5 months ago",
    stars: 5,
    initial: "D"
  },
  {
    name: "Saher Gohar",
    text: "She is one of the best gynecologists in Faisalabad. Very kind, polite, and listens to her patients carefully. Explains everything in a clear and professional way.",
    time: "1 week ago",
    stars: 5,
    initial: "S"
  },
  {
    name: "Mian",
    text: "Dr. Abeera Ali, you are a very kind and wonderful doctor. I followed your 3-month treatment plan and by the grace of Allah, I got results. Thank you so much.",
    time: "6 days ago",
    stars: 5,
    initial: "M"
  },
  {
    name: "Zunaira Noureen",
    text: "Dr. Abeera Ali is one of the best gynecologists in Faisalabad. She treats her patients politely and guides them in every situation. My experience was so good.",
    time: "1 week ago",
    stars: 5,
    initial: "Z"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-16 bg-[#FFF0F3]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-[#0D6E6E] mb-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 pb-4">
            <span>Patient Testimonials</span>
            <span className="text-[#C9956C] text-sm mt-3 md:mt-0 flex items-center gap-1 font-semibold">5.0 <Star className="w-4 h-4 fill-current"/> 265 Reviews</span>
          </h3>

          <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar gap-4 xl:grid xl:grid-cols-3 xl:overflow-visible">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[280px] w-[85vw] md:w-[350px] xl:w-auto xl:min-w-0 bg-[#FFF0F3] p-6 rounded-2xl border-l-4 border-[#0D6E6E] flex-shrink-0 snap-center flex flex-col h-full"
              >
                <p className="text-[#555] italic text-sm md:text-base leading-relaxed flex-grow mb-6">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0D6E6E] rounded-full text-white flex items-center justify-center font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1a1a1a]">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.time}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
