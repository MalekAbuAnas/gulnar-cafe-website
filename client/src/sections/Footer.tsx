import { Logo } from "../assets";

export default function Footer() {
  return (
    <footer className="w-9/12 hidden md:flex justify-center">
      <div className="flex py-10 space-x-32">
        <div className="w-1/4 h-[70px]">
          <img src={Logo} alt="Logo" width="200px" />
        </div>
        <div className="w-1/5 h-[70px] flex flex-col items-center space-y-8">
          <h1 className="font-yeseva text-lg text-[#000]">Follow Us</h1>
          <a href="#">
            <i className="fa-brands fa-instagram text-3xl cursor-pointer duration-500 hover:text-g-brown"></i>
          </a>
        </div>
        <div className="w-1/5 h-[70px] flex flex-col items-start space-y-2 text-left">
          <h1 className="font-yeseva text-lg text-[#000]">Location</h1>
          <p className="font-light leading-9">
            Kingdom of Bahrain,
            <br /> Diar Al Muharraq,
            <br /> Shop: 660,
            <br /> Building: 4441,
            <br /> Road: 6347,
            <br /> Block: 263
          </p>
        </div>
        <div className="w-1/5 h-[70px]">
          <h1 className="font-yeseva text-lg text-[#000]">Location</h1>
          <p className="font-light leading-9">
            +973 3344 5673 <br />
            +973 3846 9090 <br />
            ceo@gulnarcafe.com <br />
            gulnarcafe.bh@gmail.com <br />
          </p>
        </div>
      </div>
    </footer>
  );
}
