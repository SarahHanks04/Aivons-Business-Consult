import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function ExperienceCard({ title, link }) {
  const [firstWord, secondWord] = title.split(" ");

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className="bg-black text-white p-[3rem] rounded-lg flex justify-between items-center"
    >
      {/* Text Content (Left Side) */}
      <div className="flex flex-col uppercase">
        <h3 className="text-[20px] font-semibold leading-1.25">
          <span className="block">{firstWord}</span>
          <span className="block">{secondWord}</span>
        </h3>
        <Link
          href={link}
          className="mt-[2rem] text-[11px] text-[#8F8DA0] hover:text-blue hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* Image (Right Side) */}
      <Image
        src="/bitbucket.svg"
        alt="Bucket Icon"
        width={60}
        height={60}
        className="pt-[2rem]"
      />
    </motion.div>
  );
}
