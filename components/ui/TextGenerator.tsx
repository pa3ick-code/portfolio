"use client";
import { motion } from "framer-motion";

const TextGenerator = ({ word }: { word: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }, // Delay between letters
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 }, // Slide in from left
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.h1
      className="text-center text-[33px] md:text-5xl lg:text-6xl font-bold my-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {word.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextGenerator;
