"use client";
import Image from "next/image";
import img from "../assets/profile.jpg";

const MySelf = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-2 gap-4 justify-center items-center mx-20 my-20"
    >
      <div className="flex justify-center items-center">
        <Image
          src={img}
          alt="profile"
          width={300}
          height={300}
          className="w-[80vh] h-[80vh] object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Who Am I</h1>
        <h3 className="text-4xl w-fit p-2 font-semibold my-4 bg-white text-[#c49b66]">
          Shakil Khan
        </h3>
        <p>
          Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque
          volutpat condimentum velit class aptent taciti sociosqu ad litora
          torquent metus metus ullamcorper. Nulla metus metus ullamcorper vel
          tincidunt sed euismod nibh Quisque volutpat condimentum velit class
          aptent taciti sociosqu ad litora torquent metus metus ullamcorper vel
          tincidunt sed class aptent taciti sociosqu ad litora torquent type
          setting industry when per conubia nostra.
        </p>
        <div className="flex gap-2 my-4">
          <button className="animated-button transition-all duration-500 hover:scale-105">
            Download CV
          </button>
          <button className="animated-button transition-all duration-500 hover:scale-105">
            Hire Me!
          </button>
        </div>
      </div>
    </section>
  );
};

export default MySelf;
