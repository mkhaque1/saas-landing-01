"use client";
import { motion } from "framer-motion";
import CardIcon from "../assets/icons/box 1.svg";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Unlimited Subscribers",
    description:
      "Unlike subscription-based services that limit the number of users, our solution allows you to have unlimited subscribers, expanding your reach without additional costs.",
  },
  {
    title: "No Recurring Fees",
    description:
      "Say goodbye to monthly subscription fees. With our self-hosted solution, you make a one-time investment, saving significantly in the long run.",
  },
  {
    title: "Access to All Features",
    description:
      "Enjoy all the pro features without the need to upgrade or choose higher-tier packages. Our solution comes fully loaded with all the tools you need to succeed.",
  },
];

export const Features: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="container py-20 md:py-10 text-center">
        <div className="flex flex-col justify-center items-center mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 2,
              damping: 5,
            }}
            className="text-6xl font-bold tracking-tighter"
          >
            Why Choose Self-Hosting?
          </motion.h1>
          <div className=" max-w-xl mx-auto">
            <p className="py-5 md:text-xl">
              By opting for a self-hosted email marketing solution, you can
              enjoy:
            </p>
          </div>
        </div>
        <div className="card md:flex md:gap-3 xl:gap-5">
          {features.map(({ title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 text-center mb-9 border border-white/30 rounded-2xl py-5 md:py-10 mx-10 md:mx-3"
            >
              <div>
                <CardIcon className="text-zinc-500 w-12 h-12 rounded-lg p-3 bg-slate-200" />
              </div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-slate-300 px-10">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
