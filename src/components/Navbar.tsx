const NavList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Skills",
    link: "/skills",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>Shakil Khan</div>
      <div className="hover:underline grid grid-cols-4 gap-2 items-center justify-center">
        {NavList.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.link}>{item.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
