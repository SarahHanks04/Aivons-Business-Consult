// "use client";

// import { motion } from "framer-motion";
// import { X } from "lucide-react";
// import { useEffect } from "react";

// const Modal = ({ isOpen, onClose, message, type }) => {
//   // Close modal on Escape key press
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.key === "Escape") onClose();
//     };
//     if (isOpen) {
//       window.addEventListener("keydown", handleEsc);
//     }
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       {/* Backdrop */}
//       <motion.div
//         className="absolute inset-0 bg-black/50"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       />

//       {/* Modal Content */}
//       <motion.div
//         className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 max-w-sm w-full mx-4"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex flex-col justify-between items-center">
//           <h3
//             className={`text-lg font-semibold ${
//               type === "success" ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             {type === "success" ? "Success" : "Error"}
//           </h3>
//           <button
//             onClick={onClose}
//             className="mt-4 bg-blue text-white px-4 py-2 rounded"
//           >
//             <X className="inline mr-2" />
//           </button>
//         </div>
//         <p className="mt-2 text-white">{message}</p>
//       </motion.div>
//     </div>
//   );
// };

// export default Modal;
"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, message, type }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 max-w-sm w-full mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button at Top-Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 hover:rotate-90 transition-transform duration-200"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <h3
            className={`text-lg font-semibold ${
              type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {type === "success" ? "Success" : "Error"}
          </h3>
          <p className="mt-2 text-white">{message}</p>
        </div>
      </motion.div>
    </div>
  );
}
