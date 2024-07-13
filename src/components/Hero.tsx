import Image from "next/image";
import Arrow from "../assets/icons/arrow-w.svg";
import CursorImg from "../assets/images/cursor.png";
import Msg from "../assets/images/message.png";

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
            <h1 className=" font-bold text-[72px] md:text-9xl tracking-tighter text-center text-white leading-[72px]">
              One Task <br />
              at a Time
            </h1>
            <Image
              src={CursorImg}
              alt=""
              className=" hidden md:inline w-40 h-40 absolute top-[36%] left-[-35%] floating"
            />
            <Image
              src={Msg}
              alt=""
              className=" hidden md:inline w-40 h-40 absolute top-[36%] right-[-29%]"
            />
          </div>
          <p className=" text-white text-center md:item-center md:w-[448px] px-10 ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <button className=" z-10 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:outline-none  dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Get for Free
          </button>
        </div>
      </div>
      <div className=" absolute -z-0 h-[375px] w-[750px] md:h-[686px] md:w-[2440px] rounded-[100%] bg-black left-[50%] translate-x-[-50%] border border-[#b48cde] bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] top-[calc(100%-96px)] md:top-[calc(100%-156px)]"></div>
    </div>
  );
};
