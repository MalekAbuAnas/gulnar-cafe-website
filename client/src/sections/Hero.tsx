import { Navbar } from "../components/index";

export default function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <div className="texts-container container mx-auto text-center h-1/2 justify-center flex flex-col space-y-7 mt-10">
        <h1 className="font-yeseva text-[#fff] text-9xl self-center">
          Gulnar <br /> Cafe & Sweets
        </h1>
        <h2 className="font-yeseva text-[#fff] text-2xl self-center">
          Enjoy the flavor of life with a cup of Turkish coffee
        </h2>
        <div className="btns-container container mx-auto items-center flex justify-center">
          <button className="Button mt-6">
            <div className="Button-cube">
              <span>Explore More</span>
              <span>To The Menu</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
