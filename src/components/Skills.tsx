"use client";

import { PhpOutlined } from "@mui/icons-material";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const data = [
  {
    name: "React JS",
    description:
      "With React JS, I craft stunning and scalable Single Page Applications (SPAs) leveraging the power of React.js and Next.js alongside complementary technologies.",
    icon: <FaReact size={40} />,
  },
  {
    name: "Next JS",
    description:
      "Next JS empowers me to create elegant and scalable Single Page Applications (SPAs) utilizing React.js and Next.js, in tandem with a suite of complementary technologies.",
    icon: <TbBrandNextjs size={40} />,
  },
  {
    name: "Typescript",
    description:
      "Leveraging Typescript, I engineer visually appealing and scalable Single Page Applications (SPAs) employing React.js, Next.js, and other related technologies with precision and reliability.",
    icon: <SiTypescript size={40} />,
  },
  {
    name: "PHP",
    description:
      "Utilizing PHP, I architect visually appealing and scalable Single Page Applications (SPAs) seamlessly integrating React.js, Next.js, and other related technologies for robust and dynamic web solutions.",
    icon: <PhpOutlined style={{ fontSize: 40 }} />,
  },
];

const Skills = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section id="skills" className="mx-3 md:mx-20 my-20">
      <p className=" font-bold text-center mb-1 text-[#c49b66]">Skills</p>
      <h1 className="text-xl md:text-3xl font-bold text-center mb-7">
        My Working Languages
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-4">
        {data.map(({ name, description, icon }, index) => (
          <div
            key={name}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleMouseEnter(index)}
            className="flex flex-col items-center gap-4 py-12 px-5 bg-[#0a0a0c]"
          >
            <div className="relative">
              <p
                className={`p-11 rounded-3xl  ${
                  hoveredItem === index
                    ? "transition-transform duration-300 bg-[#c49b66] rotate-0"
                    : "rotate-45 transition-transform duration-300 text-[#c49b66] bg-white/10"
                } `}
              ></p>
              <p
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  hoveredItem === index ? "text-white" : "text-[#c49b66]"
                }`}
              >
                {icon}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mt-4">{name}</h3>
            </div>
            <p className="text-center line-clamp-5">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
