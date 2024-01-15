//import { Link } from "react-router-dom";

//type second_text = JSX.Element | string;

type Props = {
  first_text?: string;
  second_text?: string | JSX.Element;
  link?: string;
  fade?: boolean;
};

export default function Button({ first_text, second_text, link, fade }: Props) {
  return (
    <a target="_blank" href={link}>
      <button
        className="Button mt-6 z-50"
        data-aos={`${fade ? "fade-up" : ""}`}
      >
        <div className="Button-cube">
          <span>{first_text}</span>
          <span>{second_text}</span>
        </div>
      </button>
    </a>
  );
}
