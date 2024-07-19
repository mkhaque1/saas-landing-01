"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/email.jpeg";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const AppImg = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: AppImg,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <div className="bg-black bg-[linear-gradient(to_bottom,#000000,#5D2CA8)] text-white">
      <div className="container py-20 text-center">
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
          <motion.div
            ref={AppImg}
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              className=" md:w-[70%] md:h-[70%] w-full inline-flex justify-center rounded-3xl "
              src={appScreen}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
