import { Link } from "react-router-dom";

type Props = {
  isopen: boolean;
};

export default function PhoneMenu({ isopen }: Props) {
  return (
    <div
      className={`flex flex-col md:hidden bg-none w-9/12 overflow-hidden duration-500 h-0 ${
        isopen ? "pb-[200px]" : "pb-0"
      }`}
    >
      <ul className="mx-10 space-y-5">
        <li className="text-[#fff] capitalize">
          <Link to={"/"}>home</Link>
        </li>
        <li className="text-[#fff] capitalize">
          <Link to={"/about"}>about</Link>
        </li>
        <li className="text-[#fff] capitalize">
          <Link to={"/services"}>Services</Link>
        </li>
        <li className="text-[#fff] capitalize">
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li className="text-[#fff] capitalize">
          <Link to={"/contact"}>Contact US</Link>
        </li>
      </ul>
    </div>
  );
}
