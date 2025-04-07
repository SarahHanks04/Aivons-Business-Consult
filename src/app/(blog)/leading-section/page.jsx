"use client";

import { useState } from "react";
import Image from "next/image";

export default function LeadingSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-gray-200 pt-12 pb-8 md:pb-20 w-full">
      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-14 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Video Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-3/4 h-[20rem] rounded-lg overflow-hidden">
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  {/* Poster Image */}
                  <Image
                    src="/unsplashVideoImage.jpg"
                    alt="Video Poster"
                    fill
                    className="rounded-lg object-cover"
                  />
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-[11%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  >
                    <div className="text-white flex items-center justify-center">
                      <Image
                        src="/PlayIcon.svg"
                        alt="Play Video"
                        width={10}
                        height={10}
                        className="text-white object-cover"
                      />
                    </div>
                  </button>
                </div>
              ) : (
                <div>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/fLeJJPxua3E?si=o1_nKeb6qhS-AE6k"
                    title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col gap-4 pt-0 md:pt-12 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#0F0D1D]">
              We’re Leading in <br />
              the Market
            </h2>
            <p className="text-base text-[#726F84]">
              We provide top-notch solutions for your business needs, ensuring
              growth through innovative strategies and expert guidance every
              step of the way.
            </p>
            <p className="text-lg font-semibold text-[#3C72FC]">
              We have 35+ years of experience. We offer marketing and consulting
              services.
            </p>
            <div className="space-y-4">
              {/* Consulting Progress Bar */}
              <div className="flex items-center gap-4">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-[#0F0D1D] uppercase">
                      Consulting
                    </span>
                  </div>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#3C72FC] h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <span
                      className="absolute text-xs"
                      style={{
                        right: "15%",
                        top: "100%",
                        transform: "translateY(4px)",
                      }}
                    >
                      85%
                    </span>
                  </div>
                </div>
              </div>
              {/* Advices Progress Bar */}
              <div className="flex items-center gap-4">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-[#0F0D1D] uppercase">
                      Advices
                    </span>
                  </div>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#3C72FC] h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <span
                      className="absolute text-xs"
                      style={{
                        right: "35%",
                        top: "100%",
                        transform: "translateY(4px)",
                      }}
                    >
                      65%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/phoneCall.svg"
                alt="Phone Icon"
                width={20}
                height={20}
              />
              <div>
                <p className="text-sm pt-6">Have any question? Give us a call </p>
                <a
                  href="tel:+9266888000"
                  className="font-medium hover:underline text-gray-700"
                >
                  +926 688 8000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="absolute flex flex-col md:flex-row pt-8 md:pt-8">
          <div className="flex-1 bg-white shadow-lg p-6">
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-bold text-[#3C72FC]  bg-[#EBF1FF] p-1">
                01
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0F0D1D] uppercase">
                  Give Professional Advice
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  There are many variations available but the majority have
                  suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white shadow-md p-6">
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-bold text-[#3C72FC] bg-[#EBF1FF] p-1">
                02
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0F0D1D] uppercase">
                  Trusted & Professional
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  There are many variations of available but the majority have
                  suffered alteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
