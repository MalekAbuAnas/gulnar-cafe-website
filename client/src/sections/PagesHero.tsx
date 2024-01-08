import { Navbar } from "../components";

type Props = {
  title: string;
  subtitle: string;
};

export default function PagesHero({ title, subtitle }: Props) {
  return (
    <div className="pages-hero">
      <Navbar></Navbar>
      <div className="texts-cont w-full flex flex-col text-center items-center space-y-10">
        <h1 className="font-yeseva text-[#fff] text-8xl" data-aos="fade-up">
          {title}
        </h1>
        <h2 className="font-yeseva text-[#fff] text-2xl" data-aos="fade-up">
          {subtitle}
        </h2>
      </div>
    </div>
  );
}
