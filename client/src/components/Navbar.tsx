import { Link } from "react-router-dom";
import { Logo } from "../assets/index";
import NavMenus from "../data/NavMenus.json";

export default function Navbar() {
  return (
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
      </div>
    </div>
  );
}
/**style={{ color: "white" }}
 * `navlink ${active === menu ? "active" : menu}`
 */
