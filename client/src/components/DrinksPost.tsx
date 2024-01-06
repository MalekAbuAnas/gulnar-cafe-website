type Props = {
  img: string;
  title: string;
  description: string;
};

export default function DrinksPost({ img, title, description }: Props) {
  return (
    <div
      className="post w-[300px] justify-center items-center flex flex-col text-center space-y-7"
      data-aos="fade-up"
    >
      <img src={img} alt="Image" width="150px" />
      <h1 className="font-yeseva text-g-brown text-2xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
