"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import unsplashHeroImage from "../../../public/unsplashHeroImage.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-screen min-h-[calc(100vh-3rem)] mt-[3.9rem] bg-[#707070] text-white px-6 md:px-16 pt-4 pb-6">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-lg"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400 pb-4">
          Welcome to Codeshaper
        </p>
        <h1 className="text-5xl uppercase md:text-6xl font-bold mt-2 leading-tight">
          Consulting <br />
          <span className="inline-block pt-2">for every</span> <br />
          <span className="inline-block pt-2">business</span>
        </h1>
        <Link
          href="/services"
          className="inline-block mt-10 bg-blue text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Discover More
        </Link>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mt-10 md:mt-0 w-full max-w-md md:max-w-lg flex justify-center"
      >
        <Image
          src={unsplashHeroImage}
          alt="Unsplash Hero Image"
          width={500}
          height={500}
          className="w-full max-w-sm md:max-w-md object-contain rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
