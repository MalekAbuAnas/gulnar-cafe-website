import { Link } from "react-router-dom";

export default function Poweredby() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-fit md:h-[100px] w-full space-y-10 md:space-y-0 space-x-0 md:space-x-60 py-10 md:py-32">
      <h1 className="mt-0 md:mt-32 text-center md:text-left text-sm">
        Copyrights&copy; are revieved to{" "}
        <Link to={"/"}>Gulnar Cafe & Sweets</Link>
      </h1>
      <h1 className="mt-0 md:mt-32 text-center md:text-left text-sm">
        Powered by{" "}
        <Link to={"https://malek.alsayeddesign.com/"}>Malek Alsayed</Link>
      </h1>
    </div>
  );
}
