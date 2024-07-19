import Linkedin from "../assets/icons/linkedin.svg";
import Youtube from "../assets/icons/youtube.svg";
import Xsocial from "../assets/icons/x-social.svg";
import Insta from "../assets/icons/insta.svg";

export const Footer = () => {
  return (
    <div className=" bg-black">
      <div className=" container flex-col text-center md:flex-row  justify-between text-white border-t border-slate-400/45">
        <p className=" pt-5 md:py-10 opacity-50">
          © 2024 Pyonet, All rights reserved
        </p>
        <div className=" text-gray-500 md:py-10 pt-3">
          <ul className=" flex gap-3 justify-center">
            <li>
              <a
                className=" hover:text-slate-200 transition-all duration-500 ease"
                target="_blank"
                href="#"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                className=" hover:text-slate-200 transition-all duration-500 ease"
                target="_blank"
                href="#"
              >
                <Youtube />
              </a>
            </li>
            <li>
              <a
                className=" hover:text-slate-200 transition-all duration-500 ease"
                target="_blank"
                href="#"
              >
                <Xsocial />
              </a>
            </li>
            <li>
              <a
                className=" hover:text-slate-200 transition-all duration-500 ease"
                target="_blank"
                href="#"
              >
                <Insta />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
