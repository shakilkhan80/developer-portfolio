"use client";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/slazzer-edit-image.png";

const MySelf = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/shakil-khan-resume-.pdf";
    link.download = "shakil-khan-resume-.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-3 md:mx-20 my-20"
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
      <div className="flex md:block flex-col justify-center items-center">
        <h1 className="text-xl  font-semibold uppercase">
          W&#160;h&#160;o&#160;&#160;&#160;A&#160;m&#160;&#160;&#160;I
        </h1>
        <h3 className="text-4xl w-fit p-2 font-semibold my-4 bg-[#c49b66] text-white">
          Shakil Khan
        </h3>
        <p className="text-white text-xl my-3">Professional Web Developer</p>
        <p className="text-[#8f8f8f] text-center md:text-start">
          Passionate and results-driven web developer with one year of
          professional experience dedicated to crafting and maintaining
          intuitive web applications. Demonstrated proficiency in transforming
          intricate designs into polished, responsive code. Adept collaborator
          with a thirst for knowledge and commitment to staying abreast of
          emerging technologies. Thrives on turning ideas into digital reality,
          blending creativity with technical expertise. Possesses a robust work
          ethic and poised to tackle new challenges in web development. Eager to
          make meaningful contributions to forward-thinking organizations
          endeavors.
        </p>
        <div className="flex gap-2 my-4">
          <Tooltip title="Click Here to my Download CV" placement="top">
            <button
              onClick={downloadCV}
              style={{
                backgroundColor: "#c49b66",
                border: "#c49b66",
                color: "#fff",
                padding: "10px 34px",
                borderRadius: "30px",
                position: "relative",
                zIndex: "3",
                cursor: "pointer",
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "0px 5px 5px",
                float: "right",
                overflow: "hidden",
              }}
            >
              Download CV
            </button>
          </Tooltip>

          <Tooltip title="Contact with E-mail" placement="top">
            <Link
              href={"mailto:khanshakil.official@gmail.com"}
              style={{
                backgroundColor: "#c49b66",
                border: "#c49b66",
                color: "#fff",
                padding: "10px 34px",
                borderRadius: "30px",
                position: "relative",
                zIndex: "3",
                cursor: "pointer",
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "0px 5px 5px",
                float: "right",
                overflow: "hidden",
              }}
            >
              Hire Me!
            </Link>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default MySelf;
