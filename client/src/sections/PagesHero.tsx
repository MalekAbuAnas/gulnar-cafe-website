import { Button, Navbar } from "../components";

type Props = {
  title: string;
  subtitle: string;
  callToAction: boolean;
  first_text?: string | undefined;
  second_text?: string | undefined;
  link?: string;
  fade?: boolean;
};

export default function PagesHero({
  title,
  subtitle,
  callToAction,
  first_text,
  second_text,
  link,
  fade,
}: Props) {
  return (
    <div className="pages-hero pb-6">
      <Navbar></Navbar>
      <div className="texts-cont w-full flex flex-col text-center items-center space-y-10">
        <h1 className="font-yeseva text-[#fff] text-5xl md:text-8xl" data-aos="fade-up">
          {title}
        </h1>
        <h2 className="font-yeseva text-[#fff] text-xl md:text-2xl" data-aos="fade-up">
          {subtitle}
        </h2>
        {callToAction ? (
          <Button
            first_text={first_text}
            second_text={second_text}
            link={link}
            fade={fade}
          ></Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
