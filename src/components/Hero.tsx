"use client";

import Image from "next/image";
import Arrow from "../assets/icons/arrow-w.svg";
import CursorImg from "../assets/images/cursor.png";
import Msg from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className=" relative overflow-clip bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] md:py-[126px]">
      <div className=" container relative">
        <div className=" flex items-center justify-center flex-col gap-10">
          <a
            href="#"
            className="flex gap-3 justify-center border-cyan-100 border-white/35 border-[1px] py-1 px-2 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className=" inline-flex items-center gap-1">
              <span className=" text-white">Read More </span>
              <Arrow className=" text-white" />
            </span>
          </a>
          <div className=" relative">
            <h1 className=" font-bold text-[37px] md:text-7xl tracking-tighter text-center text-white leading-[40px] md:leading-[92px]">
              Empower Your Marketing <br /> Without Breaking the Bank
            </h1>
            <motion.div
              drag
              dragSnapToOrigin
              className="hidden md:inline absolute top-[36%] left-[-25%]"
            >
              <Image
                height={150}
                width={150}
                src={CursorImg}
                alt=""
                className=" max-w-none "
                draggable="false"
              />
            </motion.div>
            <motion.div className="hidden md:inline absolute top-[36%] right-[-19%] floating">
              <Image
                src={Msg}
                height={150}
                width={150}
                alt=""
                className=" max-w-none"
              />
            </motion.div>
          </div>
          <p className=" text-white text-center md:text-xl md:item-center max-w-2xl px-10 ">
            Why pay exorbitant monthly fees for email marketing when you can
            have a powerful, self-hosted solution at a fraction of the cost?
            Discover the freedom and benefits of a self-hosted email marketing
            solution, tailored to your business needs.
          </p>
          <button className=" z-10 text-gray-900 bg-slate-200 focus:outline-none  dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Get for Free
          </button>
        </div>
      </div>
      <div className=" absolute -z-0 h-[375px] w-[750px] md:h-[686px] md:w-[2440px] rounded-[100%] bg-black left-[50%] translate-x-[-50%] border border-[#b48cde] bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] top-[calc(100%-96px)] md:top-[calc(100%-156px)]"></div>
    </div>
  );
};
