type Props = {
  img: string;
  name: string;
  key: number;
  price: number;
};

export default function Post({ img, name, key, price }: Props) {
  return (
    <div
      className="post w-10/12 md:w-1/5 h-fit pb-8 bg-[#fff] shadow-2xl rounded-lg duration-500 hover:translate-y-[-25px] cursor-pointer"
      data-aos="flip-up"
    >
      <img
        src={img}
        alt={name}
        key={key}
        className="w-full border-b-4 border-g-brown rounded-t-lg"
        draggable="false"
      />
      <div className="space-y-10">
        <h1 className="text-center font-yeseva text-g-brown mt-4 text-2xl">
          {name}
        </h1>
        <h6 className="mx-4 text-g-brown">
          <span className="text-3xl font-yeseva">{price}</span>
          <span className="text-md"> BHD</span>
        </h6>
      </div>
    </div>
  );
}
