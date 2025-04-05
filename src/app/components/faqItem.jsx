"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <span className="text-sm md:text-base font-semibold text-[#0F0D1D]">
          {`${index + 1}. ${question}`}
        </span>
        {isOpen ? (
          <Minus className="text-gray-600" size={20} />
        ) : (
          <Plus className="text-gray-600" size={20} />
        )}
      </button>

      {/* Answer (Collapsible) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-600 p-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
