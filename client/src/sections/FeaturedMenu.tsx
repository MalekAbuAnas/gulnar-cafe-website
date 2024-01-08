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
import { Button, DessertsPost, DrinksPost } from "../components";

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
    <div className="featured-menu py-40 md:py-20">
      <div className="container flex flex-col mx-auto items-center space-y-11 w-10/12 md:w-full">
        <h1
          className="font-yeseva text-g-dark-brown text-6xl md:text-8xl"
          data-aos="fade-up"
        >
          Featured Menu
        </h1>
        <h1
          className="font-yeseva text-g-brown text-xl text-center md:text-left md:text-2xl"
          data-aos="fade-up"
        >
          Awaken Your Senses with a Perfect Blend of Coffee and Sweet
          Temptations
        </h1>
        <div className="menu-container mt-20 space-y-16">
          <section className="category-section h-1/4 flex flex-col items-center justify-center md:items-start md:justify-start">
            <h1
              className="font-yeseva text-g-dark-brown text-4xl"
              data-aos="fade-up"
            >
              Desserts
            </h1>
            <div className="category-posts flex flex-col md:flex-row items-center justify-center mt-10 space-x-0 md:space-x-16 w-10/12 md:w-full space-y-16 md:space-y-0">
              {Desserts.map((dessert) => (
                <DessertsPost
                  img={dessert.img}
                  title={dessert.title}
                  description={dessert.description}
                ></DessertsPost>
              ))}
            </div>
          </section>

          <section className="category-section h-1/4 flex flex-col items-center justify-center md:items-start md:justify-start">
            <h1
              className="font-yeseva text-g-dark-brown text-4xl"
              data-aos="fade-up"
            >
              Drinks
            </h1>
            <div className="category-posts flex flex-col md:flex-row items-center justify-center mt-10 space-x-0 md:space-x-16 w-10/12 md:w-full space-y-16 md:space-y-0">
              {Drinks.map((drink) => (
                <DrinksPost
                  img={drink.img}
                  title={drink.title}
                  description={drink.description}
                ></DrinksPost>
              ))}
            </div>
            <div className="call-to-action w-full flex justify-center mt-10">
              <Button
                first_text="View Full Menu"
                second_text="Let's Go"
                link={"#"}
              ></Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
