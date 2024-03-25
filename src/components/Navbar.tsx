"use client";

import { AppBar, Fab, styled } from "@mui/material";
import { useParams } from "next/navigation";

const NavList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const Navbar = () => {
  const pathName = useParams();
  console.log(pathName);
  return (
    <div>
      <AppBar sx={{ bgcolor: "#222", color: "#c49b66" }} position="fixed">
        <div className="flex   justify-between items-center mx-32 py-2">
          <div className="text-4xl font-bold text-white">Shakil</div>
          <div className="grid grid-cols-5 font-medium gap-2 items-center text-sm justify-center text-white">
            {NavList.map((item, index) => {
              return (
                <div key={index} className="hover:text-[#c49b66]">
                  <a href={item.link}>{item.name}</a>
                </div>
              );
            })}
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
