export const Hero = () => {
  return (
    <div className=" bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px]">
      <div className=" container">
        <div className=" flex items-center justify-center flex-col gap-10">
          <a
            href="#"
            className="flex gap-5 justify-center border-cyan-100 border-opacity-50 border-[1px] py-1 px-2 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF)] bg-clip-text text-transparent">
              Version 2.0 is here
            </span>
            <span className=" text-white">Read More</span>
          </a>
          <h1 className=" font-bold text-[72px] text-center text-white leading-[72px]">
            One Task <br />
            at a Time
          </h1>
          <p className=" text-white text-center md:item-center md:w-[448px] px-10 ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Get for Free
          </button>
        </div>
      </div>
    </div>
  );
};
