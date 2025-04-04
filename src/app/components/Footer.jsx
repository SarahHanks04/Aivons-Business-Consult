"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FooterData } from "@/app/constant/FooterDatas";
import { useState } from "react";
import Modal from "../constant/Modal";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Footer Link Column
const FooterLinkColumn = ({ title, links }) => (
  <motion.div variants={itemVariants} className="pt-[3.6rem]">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="mt-8 space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-white hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  // API call to reqres.in for the subscription form
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      const result = await response.json();
      console.log(result);
      setModalState({
        isOpen: true,
        message: "Thank you for subscribing to our newsletter!",
        type: "success",
      });
      reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      setModalState({
        isOpen: true,
        message: "Failed to subscribe. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <>
      <footer className="bg-[#0F0D1D] text-white py-12">
        <main className="container mx-auto px-[3.5rem]">
          {/* Top Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Logo Section */}
            <motion.div variants={itemVariants}>
              <Image
                src="/aivonLogo.png"
                alt="Company Logo"
                className="object-cover rounded-md"
                width={100}
                height={20}
              />
              <p className="mt-1 text-gray-400 py-4 border-b border-gray-700">
                Welcome to our consultancy agency. Lorem simply text amet cing
                elit.
              </p>
              <p className="mt-4 text-gray-400 flex items-center">
                <Image
                  src="/IconPhone.svg"
                  alt="Phone Number"
                  width={16}
                  height={16}
                />
                <span className="ml-2">+92 666 888 0000</span>
              </p>
              <p className="mt-4 text-gray-400 flex items-center">
                <Image
                  src="/IconEmail.svg"
                  alt="Email Address"
                  width={16}
                  height={16}
                />
                <span className="ml-2">needhelp@company.com</span>
              </p>
              <p className="mt-4 text-gray-400 flex items-center">
                <Image
                  src="/map.svg"
                  alt="Address Location"
                  width={16}
                  height={16}
                />
                <span className="ml-2 text-sm">
                  66 Brooklyn Street New York, USA
                </span>
              </p>
            </motion.div>

            {/* Explore Links */}
            <FooterLinkColumn title="Explore" links={FooterData.exploreLinks} />

            {/* Services Links */}
            <FooterLinkColumn
              title="Services"
              links={FooterData.servicesLinks}
            />

            {/* Newsletter Subscription Form */}
            <motion.div variants={itemVariants} className="pt-[3.6rem]">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="mt-8 text-gray-400">
                Subscribe for the latest articles and resources
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4 relative flex flex-col"
              >
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white text-black px-4 py-2 rounded w-full pr-24 focus:outline-none"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 bg-blue text-sm text-white px-4 py-1 rounded hover:bg-blue-700 disabled:bg-blue-400"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Register"}
                  </button>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="text-gray-400 text-sm">
              © Copyright {currentYear} Company
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              {FooterData.socialLinks.map((social) => (
                <Link
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.alt}`}
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </main>
      </footer>

      {/* Modal Component */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        message={modalState.message}
        type={modalState.type}
      />
    </>
  );
}
