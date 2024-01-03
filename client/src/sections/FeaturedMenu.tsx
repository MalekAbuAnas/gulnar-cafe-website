import {
  Halkoum01,
  Halkoum02,
  Halkoum03,
  Halkoum04,
  Juice01,
  Juice02,
  Juice03,
  Juice04,
} from "../assets/index";
// import Desserts from "../data/Desserts.json";
//import Drinks from "../data/Drinks.json";

const Desserts = [
  {
    img: Halkoum04,
    title: "SweetRolls",
    description: "fluffy Sweet Rolls for unforgettable experience",
  },
  {
    img: Halkoum02,
    title: "Red Halkoum",
    description:
      "Finest ingredients in bold, vibrant Red Halkoum for your sweet tooth",
  },
  {
    img: Halkoum01,
    title: "Halkoum with pomegranate",
    description:
      "Sweet and exotic pomegranate Halkoum, perfect for any occasion",
  },
  {
    img: Halkoum03,
    title: "Halkoum with Pistachios",
    description:
      "Rich, nutty Halkoum with finest pistachios, an irresistible treat",
  },
];

const Drinks = [
  {
    img: Juice01,
    title: "Cocktail smoothie",
    description:
      "Nice smoothie cocktail with fresh flavors to tantalize your taste buds",
  },
  {
    img: Juice02,
    title: "Honey Cocktail",
    description:
      "Perfectly sweet and smooth Honey Cocktail, tantalizing your taste buds",
  },
  {
    img: Juice04,
    title: "Orange Juice",
    description:
      "Fresh Orange Juice, packed with vitamin C for a cool start to your day",
  },
  {
    img: Juice03,
    title: "LemonJuice",
    description: "Smooth and refreshing Lemon Juice, perfect anytime",
  },
];

export default function FeaturedMenu() {
  return (
    <div className="featured-menu">
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="font-yeseva text-g-brown text-8xl">Featured Menu</h1>
        <h1 className="font-yeseva text-g-brown text-2xl">
          Awaken Your Senses with a Perfect Blend of Coffee and Sweet
          Temptations
        </h1>
        <div className="menu-container mt-20 space-y-16">
          <section className="category-section h-1/4">
            <h1 className="font-yeseva text-g-brown text-4xl">Desserts</h1>
            <div className="category-posts continer mx-auto flex flex-wrap mt-10 space-x-16">
              {Desserts.map((dessert) => (
                <div className="post w-[300px] justify-center items-center flex flex-col text-center space-y-7">
                  <img src={dessert.img} alt="Image" width="267px" />
                  <h1 className="font-yeseva text-g-brown text-2xl">
                    {dessert.title}
                  </h1>
                  <p>{dessert.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="category-section h-1/4">
            <h1 className="font-yeseva text-g-brown text-4xl">Drinks</h1>
            <div className="category-posts continer mx-auto flex flex-wrap mt-10 space-x-16">
              {Drinks.map((drink) => (
                <div className="post w-[300px] justify-center items-center flex flex-col text-center space-y-7">
                  <img src={drink.img} alt="Image" width="150px" />
                  <h1 className="font-yeseva text-g-brown text-2xl">
                    {drink.title}
                  </h1>
                  <p>{drink.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
