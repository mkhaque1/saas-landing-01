import Image from "next/image";
import logoimg from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import { clsx } from "clsx";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className=" container flex justify-between px-5 py-4 ">
        <div className=" relative">
          <div className=" absolute w-full blur-md top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF)]"></div>
          <Image src={logoimg} alt="logo" className=" w-10 h-10 relative" />
        </div>

        <div className="content-center border border-zinc-300 h-10 w-10 border-opacity-30 inline-flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className=" text-white cursor-pointer" />
        </div>
        <nav className=" text-white md:flex gap-10 items-center hidden sm:inline">
          {["Home", "Services", "Contact", "Customers"].map((item, index) => (
            <a
              key={index}
              className=" opacity-55 hover:opacity-85 transition-all duration-500 ease-out cursor-pointer"
            >
              {item}
            </a>
          ))}
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Book Demo
          </button>
        </nav>
      </div>
    </div>
  );
};
