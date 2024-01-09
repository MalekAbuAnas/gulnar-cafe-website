import { Button } from "../components";

export default function ServicesContent() {
  return (
    <div className="services-content">
      <div className="cards-container container mx-auto py-10 flex flex-wrap gap-10 items-center justify-center">
        <div
          className="card w-[30%] h-fit py-6 text-center min-h-96 bg-[#fff] rounded-3xl shadow-2xl"
          data-aos="flip-up"
        >
          <h1 className="font-yeseva text-4xl text-g-dark-brown">
            Hospitality Services
          </h1>
          <div className="card-body py-6 text-center space-y-6">
            <li className="text-lg">Turkish coffee on the sand</li>
            <li className="text-lg">Turkish tea on the samovar</li>
            <li className="text-lg">Luxurious and fresh Turkish sweets</li>
          </div>
        </div>
        <div
          className="card w-[30%] h-fit py-6 text-center min-h-96 bg-[#fff] rounded-3xl shadow-2xl"
          data-aos="flip-up"
        >
          <h1 className="font-yeseva text-4xl text-g-dark-brown">
            Catering & events
          </h1>
          <div className="card-body py-6 text-center space-y-6">
            <li className="text-lg">All kinds of luxurious hospitality</li>
          </div>
        </div>
        <div
          className="card w-[30%] h-fit py-6 text-center min-h-96 bg-[#fff] rounded-3xl shadow-2xl"
          data-aos="flip-up"
        >
          <h1 className="font-yeseva text-4xl text-g-dark-brown">Wholesale</h1>
          <div className="card-body py-6 text-center space-y-6">
            <li className="text-lg">dried fruits trade</li>
            <li className="text-lg">coffee and tea trade</li>
            <li className="text-lg">Turkish Halkoum</li>
          </div>
        </div>
      </div>
      <div
        className="how-to-order container mx-auto px-5 py-5"
        data-aos="flip-up"
      >
        <div className="h-fit py-6 bg-[#fff] rounded-3xl shadow-2xl px-10 space-y-10">
          <h1 className="font-yeseva text-4xl text-g-dark-brown">
            How to Order
          </h1>
          <p className="text-lg leading-[40px]">
            It’s easier than you think. You can contact us through the “Contact
            Us” page, or by contacting us through the numbers and e-mails shown
            below, and will we replay as fast as possible.
          </p>
          <Button
            first_text="Order Now"
            second_text="To Contact Page"
            link="/contact"
            fade={false}
          ></Button>
        </div>
      </div>
    </div>
  );
}
