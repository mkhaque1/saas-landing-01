"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const Skeleton = () => (
  <div className=" bg-custom-pattern bg-cover bg-no-repeat flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] dark:bg-black"></div>
);

const items = [
  {
    title: "Data Ownership",
    description:
      "Maintain full control over your data without relying on third-party providers.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Customization",
    description:
      "Tailor the solution to fit your specific needs, with the flexibility to integrate with other tools and platforms.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Security",
    description:
      "Enhanced security measures to protect your sensitive marketing data.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-300" />,
  },
];

export function Bento() {
  return (
    <div className="w-full py-16 md:py-24 px-10 bg-gradient-to-b from-black via-blue-950 to-[#5D2CA8] ">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            damping: 5,
          }}
          className="text-6xl font-bold tracking-tighter text-center text-white py-16 md: pb-20"
        >
          Additional Benefits
        </motion.h1>
      </div>
      <div className=" ">
        <BentoGrid className="   md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
