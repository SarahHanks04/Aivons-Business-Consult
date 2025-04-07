"use client";

import { motion } from "framer-motion";
import { experienceCards, partnerLogos } from "../constant/experienceDatas";
import ExperienceCard from "../components/experienceCard";
import PartnerCarousel from "../components/partnersCarousel";

export default function Experience() {
  return (
    <section className="bg-[#0F0D1D] text-white py-[6rem]">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase">
            Real-World Experience
          </h2>
          <p className="mt-2 text-gray-400">
            The best business consulting firm you can count on!
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {experienceCards.map((card, index) => (
            <ExperienceCard key={index} title={card.title} link={card.link} />
          ))}
        </motion.div>

        {/* Partners Carousel */}
        <div className="mt-12 pt-8">
          <div className="relative flex items-center justify-center px-3">
            <div className=" inset-x-0 h-px bg-gray-700 w-full z-10"></div>
            <h3 className="absolute text-center text-sm uppercase leading-1.25 bg-[#0F0D1D] px-4 z-10">
              Meet the Partners
            </h3>
          </div>
          <PartnerCarousel logos={partnerLogos} />
        </div>
      </div>
    </section>
  );
}
