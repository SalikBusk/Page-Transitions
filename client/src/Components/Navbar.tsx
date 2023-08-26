import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Logo = () => {
  return (
    <Link className="" to={`/`}>
      Busk
    </Link>
  );
};

interface MenuItemProps {
  label: string,
  path: string,
}

const MenuItem: React.FC<MenuItemProps> = ({label, path}) => {
  return(
    <Link to={`${path}`}>
      {label}
    </Link>
  )
}

const Navigation = () => {
  const Nav = [
    {
      label: "Index.tsx",
      path: "/",
    },
    {
      label: "About.tsx",
      path: "/about",
    },
    {
      label: "Contact.tsx",
      path: "/contact",
    },
  ]
  return(
    <div className="flex flex-row items-center gap-4">
      {Nav.map((item) => {
        return(
          <MenuItem label={item.label} path={item.path}/>
        )
      })}
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="fixed w-full z-[1000]">
      <Container>
        <div className="flex flex-row justify-between items-center py-2">
        <Logo/>
        <Navigation/>
      </div>
      </Container>
    </div>
  )
};

export default Navbar;
