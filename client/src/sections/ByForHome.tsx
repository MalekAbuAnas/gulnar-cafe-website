import { ErtugrulCoffee, AlhaseebCoffee, AlabdCoffee } from "../assets";

const products = [
  {
    name: "Ertugrul Coffee",
    img: ErtugrulCoffee,
    price: 1.5,
  },
  {
    name: "Alhaseeb Coffee",
    img: AlhaseebCoffee,
    price: 2.2,
  },
  {
    name: "Nigga Coffee",
    img: AlabdCoffee,
    price: 0.3,
  },
];

export default function ByForHome() {
  return (
    <div className="by-for-home h-fit py-10 space-y-20">
      <div className="BFH-texts container mx-auto items-center justify-center text-center flex flex-col space-y-10">
        <h1 className="font-yeseva text-[#fff] text-7xl">Buy For Home</h1>
        <h1 className="font-yeseva text-[#fff] text-2xl">
          Home-ground coffee, your gateway to a customized, flavorful brew
        </h1>
      </div>
      <div className="posts-container flex justify-center space-x-40">
        {products.map((product, index) => (
          <div className="post w-1/5 h-fit pb-8 bg-[#fff] shadow-2xl rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              key={index}
              className="w-full border-b-4 border-g-brown rounded-t-lg"
            />
            <div className="space-y-10">
              <h1 className="text-center font-yeseva text-g-brown mt-4 text-2xl">
                {product.name}
              </h1>
              <h6 className="mx-4 text-g-brown">
                <span className="text-3xl font-yeseva">{product.price}</span>
                <span className="text-md"> BHD</span>
              </h6>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center text-md font-yeseva text-[#fff]">
        We apologize for not providing the ordering and delivery service now, we
        are working to provide it soon
      </h1>
    </div>
  );
}
{
  /* <div className="post w-1/5 h-[500px] bg-[#fff] bg-opacity-75 shadow-2xl">
          <img src={ErtugrulCoffee} alt="" className="w-full" />
          <h1 className="">Ertugrul Coffee</h1>
        </div>
        <div className="post w-1/5 h-[500px] bg-[#fff] bg-opacity-75 shadow-2xl">
          <img src={AlhaseebCoffee} alt="" className="w-full" />
          <h1 className="">Alhaseeb Coffee</h1>
        </div>
        <div className="post w-1/5 h-[500px] bg-[#fff] bg-opacity-75 shadow-2xl">
          <img src={AlabdCoffee} alt="" className="w-full" />
          <h1 className="">Negga Coffee</h1>
        </div> */
}
