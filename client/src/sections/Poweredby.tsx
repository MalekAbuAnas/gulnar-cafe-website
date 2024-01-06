import { Link } from "react-router-dom";

export default function Poweredby() {
  return (
    <div className="flex items-center justify-center relative h-[100px] w-full space-x-60 py-32">
      <h1 className="mt-32">
        Copyrights&copy; are revieved to{" "}
        <Link to={"/"}>Gulnar Cafe & Sweets</Link>
      </h1>
      <h1 className="mt-32">
        Powered by{" "}
        <Link to={"https://malek.alsayeddesign.com/"}>Malek Alsayed</Link>
      </h1>
    </div>
  );
}
