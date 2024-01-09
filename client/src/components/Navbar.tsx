/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { Logo, MenuIcon, CloseIcon } from "../assets/index";
import NavMenus from "../data/NavMenus.json";
import { useState } from "react";

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar bg-none">
        <div className="container flex justify-between mx-auto p-1 items-center bg-none">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="logo w-44" />
          </Link>
          <ul className="hidden md:flex space-x-12 text-white">
            {NavMenus.map((menu, index) => (
              <li className="text-white">
                <Link
                  key={index}
                  to={menu === "Home" ? "/" : menu}
                  className="navlink"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <img
            src={isopen ? CloseIcon : MenuIcon}
            alt="menu icon"
            width="30px"
            className="block md:hidden mx-4 md:mx-0 duration-500"
            onClick={isopen ? closeMenu : openMenu}
          />
        </div>
      </div>
      <div
        className={`bg-none w-9/12 overflow-hidden duration-500 h-0 ${
          isopen ? "pb-[200px]" : "pb-0"
        }`}
      >
        <ul className="mx-10 space-y-5">
          {NavMenus.map((menu, index) => (
            <li className="text-white">
              <Link
                key={index}
                to={menu === "Home" ? "/" : menu}
                className="navlink"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
/**<div className="bg-none w-9/12 overflow-hidden h-0">
        <ul className="mx-10 space-y-5">
          {NavMenus.map((menu, index) => (
            <li className="text-white">
              <Link
                key={index}
                to={menu === "Home" ? "/" : menu}
                className="navlink"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
 */
