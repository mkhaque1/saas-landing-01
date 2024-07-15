"use client";

import { motion } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <div className="bg-black bg-[linear-gradient(to_bottom,#000000,#5D2CA8)] text-white">
      <div className="container py-10 text-center">
        <div className="flex flex-col gap-5 justify-center items-center mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 5,

              damping: 5,
            }}
            className="text-6xl font-bold tracking-tighter"
          >
            Intuitive interface
          </motion.h1>
          <p className="py-5 w-full md:w-[576px] md:text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
          <Image src={appScreen} alt="" />
        </div>
      </div>
    </div>
  );
};
