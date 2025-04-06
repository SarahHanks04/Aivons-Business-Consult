"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "BUSINESSES GROWTH",
    subtitle: "THOUGHT LEADERSHIP",
    icon: "/automobile.svg",
  },
  {
    title: "BUSINESSES GROWTH",
    subtitle: "THOUGHT LEADERSHIP",
    icon: "/automobile.svg",
  },
  {
    title: "BUSINESSES GROWTH",
    subtitle: "THOUGHT LEADERSHIP",
    icon: "/automobile.svg",
  },
];

export default function NewCase() {
  return (
    <section className="bg-[#F2F4F8] pt-[18rem] md:pt-[10rem] pb-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          NEW CASE STUDIES
        </h2>
        <p className="text-[#726F84] pt-3 mb-14">
          We help our clients renew their business
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-md w-[280px] h-[22rem] shadow-md bg-white cursor-pointer transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="flex flex-col items-center justify-start text-white h-full group">
                <div className="pt-[10rem] w-full h-full bg-[#726F84] group-hover:bg-blue transition-colors duration-300 flex flex-col items-center">
                  <div className="relative w-10 h-10 mb-6">
                    <Image
                      src={study.icon}
                      alt={`${study.title} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest">
                    {study.subtitle}
                  </p>
                  <h3 className="text-[18px] items-start md:text-[30px] font-bold">
                    {study.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
