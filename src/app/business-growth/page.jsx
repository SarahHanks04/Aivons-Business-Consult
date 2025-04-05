"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BusinessTab from "../components/businessTab";
import TabContent from "../components/tabContent";

// Data for the stats cards
const statsData = [
  {
    id: 1,
    iconSrc: "/brainstorming.svg",
    number: "420",
    label: "Consulting Solutions",
  },
  {
    id: 2,
    iconSrc: "/brainstorming.svg",
    number: "420",
    label: "Consulting Solutions",
  },
  {
    id: 3,
    iconSrc: "/brainstorming.svg",
    number: "420",
    label: "Consulting Solutions",
  },
  {
    id: 4,
    iconSrc: "/brainstorming.svg",
    number: "420",
    label: "Consulting Solutions",
  },
];

export default function BusinessStats() {
  const [activeTab, setActiveTab] = useState("Business Growth");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-[#0D152E] text-white pt-16">
      <div className="container mx-auto px-4">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {/* Icon Wrapper */}
              <div className="bg-[#06050C] p-3 flex justify-center items-center">
                <Image
                  src={stat.iconSrc}
                  alt="Stats Icon"
                  width={30}
                  height={30}
                />
              </div>

              {/* Animated Number */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="text-4xl font-bold mt-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-[10px] mt-2 uppercase pb-10">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabbed Section */}
        <div className="w-full mt-[3rem]">
          <BusinessTab onTabChange={handleTabChange} />
        </div>
        <div className="mt-[-3.4rem] w-full">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
