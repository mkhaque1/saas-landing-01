"use client";
import Image from "next/image";
import Helix2 from "../assets/images/helix2.png";
import EmojiStar from "../assets/images/emojistar.png";
import { useState } from "react";
import { motion } from "framer-motion";

export const CallToAction: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-black text-white">
      <div className="container flex flex-col justify-center items-center py-20">
        <div className=" relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 5 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-center"
          >
            Get Started Today
          </motion.h1>
          <motion.div drag dragSnapToOrigin>
            <Image
              className=" hidden md:inline w-40 h-40 absolute top-[36%] left-[-35%] "
              src={EmojiStar}
              alt="footer item"
              draggable="false"
            />
          </motion.div>

          <Image
            className=" hidden md:inline w-40 h-40 absolute top-[36%] right-[-29%] floating"
            src={Helix2}
            alt="footer item 2"
          />
          <div className="max-w-xl mx-auto">
            <p className="py-5 md:text-xl text-center">
              Take charge of your email marketing with our self-hosted solution.
              Contact us now to set up an instance and start experiencing the
              benefits.
            </p>
          </div>
        </div>
        <div className="w-full md:flex md:justify-center mt-5">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 md:flex-row"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="px-4 py-2 w-full md:w-[400px] bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-800"
              required
            />
            <button
              type="submit"
              className="bg-slate-200 w-full md:w-[150px] text-zinc-800 px-4 py-2 rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Get Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
