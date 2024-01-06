import { Navbar, Button } from "../components/index";

interface Props {
  title: string;
  Subtitle: string;
  btn_frst_text: string;
  btn_second_text: string;
}

export default function Hero({
  title,
  Subtitle,
  btn_frst_text,
  btn_second_text,
}: Props) {
  return (
    <div className="hero">
      <Navbar />
      <div className="texts-container container mx-auto text-center h-1/2 justify-center flex flex-col space-y-7 mt-10">
        <h1 className="font-yeseva text-[#fff] text-9xl self-center w-2/3">
          {title}
        </h1>
        <h2 className="font-yeseva text-[#fff] text-2xl self-center">
          {Subtitle}
        </h2>
        <div className="btns-container container mx-auto items-center flex justify-center">
          <Button
            first_text={btn_frst_text}
            second_text={btn_second_text}
          ></Button>
          {/* <button className="Button mt-6">
            <div className="Button-cube">
              <span>{btn_frst_text}</span>
              <span>{btn_second_text}</span>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}
// Gulnar <br /> Cafe & Sweets
// Enjoy the flavor of life with a cup of Turkish coffee
// Explore More
// To The Menu
