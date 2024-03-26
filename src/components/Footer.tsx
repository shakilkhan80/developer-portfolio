"use client";
import Link from "next/link";
import img from "../assets/wave.svg";

import { useState } from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const SocialData = [
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100007310385697&mibextid=ZbWKwL",
    icon: FaFacebookF,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/shakil-khan-6b27b7273",
    icon: FaLinkedinIn,
  },
  {
    name: "github",
    link: "https://github.com/shakilkhan80",
    icon: FaGithubSquare,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/sha_kil_khan_?igsh=MWxmdHp0cHAwaDcwcw==",
    icon: FaInstagram,
  },
  {
    name: "twitter",
    link: "",
    icon: FaTwitter,
  },
];

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      className="relative h-[50vh] md:h-[70vh] place-items-start items-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="absolute  bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl font-bold text-center text-white">Shakil</h1>
        <div className="flex justify-center items-center gap-5 mt-4 ">
          {SocialData.map((item, index) => {
            return (
              <div
                key={index}
                className=""
                onTouchStart={() => handleMouseEnter(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.link} target="_blank">
                  <div className="relative">
                    <p
                      className={`p-6 bg-white/10 rounded-xl  ${
                        hoveredItem === index
                          ? "transition-transform duration-300  text-white bg-[#b18955] rotate-0"
                          : "rotate-45 transition-transform duration-300 text-[#c49b66] bg-white/10"
                      } `}
                    ></p>
                    <p
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                        hoveredItem === index ? "text-white" : "text-[#c49b66]"
                      }`}
                    >
                      {<item.icon />}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <p className="flex items-center justify-center gap-2 text-white/65 mt-5 text-sm">
          <FaRegCopyright />
          <span>2023 Developer Portfolio. All Rights Reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
