"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function PartnerCarousel({ logos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  const visibleLogosCount = 4;

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [logos.length, isPaused]);

  // Handle arrow clicks
  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? logos.length - 1 : prevIndex - 1
      );
    }, 1000);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1000);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle dot click to jump to a specific logo
  const goToLogo = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(index);
    }, 1000);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Displayed logos
  const displayedLogos = [];
  for (let i = 0; i < visibleLogosCount; i++) {
    const index = (currentIndex + i) % logos.length;
    displayedLogos.push(logos[index]);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Carousel with Arrows and Logos */}
      <div
        className="w-full overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label="Previous partner logo"
          >
            <MoveLeft size={20} className="text-blue" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden w-full max-w-5xl">
            <motion.div
              className={`flex ${
                isTransitioning ? "transition-transform duration-1000" : ""
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleLogosCount)
                }%)`,
              }}
            >
              {logos
                .concat(logos.slice(0, visibleLogosCount))
                .map((logo, index) => (
                  <div
                    key={index}
                    className="flex-none w-1/5 flex justify-center items-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={150}
                      className="object-contain py-4"
                    />
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label="Next partner logo"
          >
            <MoveRight size={20} className="text-blue" />
          </button>
        </div>
      </div>

      {/* Carousel Dot Indicators */}
      <div className="flex space-x-3 mt-4">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToLogo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-6 bg-[#FDD2BF] scale-125"
                : "w-2 bg-gray-500 scale-100"
            } hover:bg-blue-400 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label={`Go to partner logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
