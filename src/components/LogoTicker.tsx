import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" text-center py-24 md:py-32">
        <p className="py-5 text-xl">
          Trusted by the world's most innovative teams
        </p>
        <Marquee
          gradient={true}
          gradientWidth={150}
          gradientColor="#000"
          autoFill={true}
        >
          <Image src={acmeLogo} alt="" width={200} className="px-5" />
          <Image src={quantumLogo} alt="" width={200} className="px-5" />
          <Image src={echoLogo} alt="" width={200} className="px-5" />
          <Image src={celestialLogo} alt="" width={200} className="px-5" />
          <Image src={pulseLogo} alt="" width={200} className="px-5" />
          <Image src={apexLogo} alt="" width={200} className="px-5" />
        </Marquee>
      </div>
    </div>
  );
};
