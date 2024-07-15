import Linkedin from "../assets/icons/linkedin.svg";
import Youtube from "../assets/icons/youtube.svg";
import Xsocial from "../assets/icons/x-social.svg";
import Insta from "../assets/icons/insta.svg";

export const Footer = () => {
  return (
    <div className=" bg-black">
      <div className=" container flex-col text-center md:flex-row  justify-between text-white border-t border-slate-400/45">
        <p className=" pt-5 md:py-10 opacity-50">
          © 2024 Your Company, Inc. All rights reserved
        </p>
        <div className=" flex gap-2 text-gray-500 md:py-10 py-5 justify-center">
          <Linkedin />
          <Youtube />
          <Xsocial />
          <Insta />
        </div>
      </div>
    </div>
  );
};
