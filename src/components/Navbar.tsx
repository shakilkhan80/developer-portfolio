"use client";

import { MenuBook } from "@mui/icons-material";
import { AppBar, Button, Fab, Menu, MenuItem, styled } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pathName = useParams();
  console.log(pathName);
  return (
    <div>
      <AppBar sx={{ bgcolor: "#222", color: "#c49b66" }} position="fixed">
        <div className="flex justify-between items-center mx-3 md:mx-32 py-2">
          <div className="text-xl md:text-4xl font-bold text-white">Shakil</div>
          <div className="hidden md:grid grid-cols-5 font-medium gap-2 items-center text-sm justify-center text-white">
            {NavList.map((item, index) => {
              return (
                <div key={index} className="hover:text-[#c49b66]">
                  <a href={item.link}>{item.name}</a>
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
            <Button
              color="info"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <IoMenu className="text-[#c49b66]" size={30}/>
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {NavList.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>
                    <MenuItem onClick={handleClose}>{item.name}</MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
