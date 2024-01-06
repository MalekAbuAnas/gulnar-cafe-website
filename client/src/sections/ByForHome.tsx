import { ErtugrulCoffee, AlhaseebCoffee, AlabdCoffee } from "../assets";
import { Post } from "../components";

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
        <h1
          className="font-yeseva text-[#fff] text-5xl md:text-7xl"
          data-aos="fade-up"
        >
          Buy For Home
        </h1>
        <h1
          className="font-yeseva text-[#fff] text-lg md:text-2xl"
          data-aos="fade-up"
        >
          Home-ground coffee, your gateway to a customized, flavorful brew
        </h1>
      </div>
      <div className="posts-container flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-40 space-y-10 md:space-y-0">
        {products.map((product, index) => (
          <Post
            img={product.img}
            name={product.name}
            key={index}
            price={product.price}
          ></Post>
        ))}
      </div>
      <h1
        className="text-center text-md font-yeseva text-[#fff]"
        data-aos="fade-up"
      >
        We apologize for not providing the ordering and delivery service now, we
        are working to provide it soon
      </h1>
    </div>
  );
}
