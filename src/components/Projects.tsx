"use client";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import imgdrbonna from "../assets/drbonna.png";
import imgMadhobi from "../assets/madhobimart.png";
import imgNexis from "../assets/nexis.png";

const data = [
  {
    name: "Nexis LTD",
    languages: " React JS Next JS TypeScript",
    image: imgNexis,
    type: "Company Portfolio",
    link: "https://www.nexisltd.com/",
  },
  {
    name: "Madhobi Mart",
    languages: "Next JS TypeScript Prisma Schema",
    image: imgMadhobi,
    type: "E-Commerce Website",
    link: "https://www.madhobimart.com/",
  },
  {
    name: "Portfolio Design",
    languages: "Next JS TypeScript",
    image: imgdrbonna,
    type: "Personal Portfolio",
    link: "https://www.drbonna.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="mx-2 md:mx-20 my-20 ">
        <p className=" font-bold text-center mb-1 text-[#c49b66]">Experience</p>
        <h1 className="text-3xl font-bold text-center mb-7">
          My Working Projects
        </h1>
        <div className=" grid lg:grid-cols-3 grid-cols-1 justify-around items-center gap-2 ">
          {data.map((d, index) => {
            return (
              <Tooltip
                title={`See ${d.name} Website`}
                placement="top"
                key={index}
              >
                <Link
                  href={d.link}
                  target="_blank"
                  key={index}
                  className="h-full cursor-pointer"
                >
                  <div className="h-full py-2 px-6 bg-[#0a0a0c] cursor-pointer">
                    <div className="flex justify-center items-center mt-4 mb-1 overflow-hidden">
                      <Image
                        src={d.image}
                        alt="working_history"
                        width={300}
                        height={300}
                        className="w-[60vh] h-[30vh] object-cover rounded-lg hover:scale-125 transition-all duration-500 ease-in"
                      />
                    </div>
                    <div className=" mt-2">
                      <h1 className="text-2xl font-bold mt-2">{d.name}</h1>
                      <h1 className="text-base font-semibold mt-1">{d.type}</h1>
                      <p className="mb-4 text-xs mt-2">
                        Languages: {d.languages}
                      </p>
                    </div>
                  </div>
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
