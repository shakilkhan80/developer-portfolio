"use client";
import Link from "next/link";
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
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-white">Shakil</h1>
      <div className="flex justify-center items-center gap-5 mt-4 ">
        {SocialData.map((item, index) => {
          return (
            <div key={index} className="">
              <Link href={item.link}>
                <p className="bg-[#302e2a] rounded-lg p-3  rotate-45 hover:rotate-0 transition-transform duration-300 text-[#c49b66] hover:text-white hover:bg-[#c3965b]">
                  <span>
                    {<item.icon className="-rotate-45" />}
                  </span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-center text-white/65 mt-1 text-sm">
        <FaRegCopyright /> 2023 Developer Portfolio. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
