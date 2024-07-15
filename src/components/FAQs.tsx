"use client";

import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { transform } from "next/dist/build/swc";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<boolean[]>(
    Array(items.length).fill(false)
  );

  const toggleOpen = (index: number) => {
    setOpenIndices((prevOpenIndices) =>
      prevOpenIndices.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="bg-black bg-[linear-gradient(to_bottom,#5D2CA8,#000000)] text-white">
      <div className="container py-24 text-center">
        <motion.div
          transition={{ layout: { duration: 0.5, type: "ease" }, damping: 1 }}
          layout
          className="flex flex-col justify-center items-center mb-5"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold md:text-6xl py-5 tracking-tighter"
          >
            Frequently asked questions
          </motion.h1>
        </motion.div>
        <div className="faq text-center">
          {items.map(({ question, answer }, index) => (
            <div key={question}>
              <motion.div
                onClick={() => toggleOpen(index)}
                layout="position"
                className="px-3 py-5 mb-3 cursor-pointer flex gap-5 justify-between bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/40"
              >
                <span>{question}</span>
                {openIndices[index] ? <MinusIcon /> : <PlusIcon />}
              </motion.div>

              <AnimatePresence>
                {openIndices[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, type: "ease", damping: 5 }}
                  >
                    <p className="p-5 text-left mb-3 border-b border-white/35 bg-gradient-to-r from-purple-900 to-zinc-800">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
