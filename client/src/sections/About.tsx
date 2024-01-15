import { Shop } from "../assets";
import { Button } from "../components";

export default function About() {
  return (
    <div className="about py-20">
      <div className="container flex flex-col md:flex-row items-center justify-center w-full h-full mx-auto">
        <div className="mt-20 w-11/12 md:mt-0 md:w-1/2 m-0 md:ml-40">
          <img
            src={Shop}
            alt="Shop"
            width="600px"
            className="shadow-2xl mb-1 rounded-lg md:rounded-none"
            data-aos="flip-up"
          />
        </div>
        <div className="w-10/12 flex flex-col md:w-1/2 space-y-6 items-center justify-center md:items-start md:justify-start">
          <h1
            className="mt-5 w-full font-yeseva text-6xl md:text-8xl text-g-dark-brown text-center md:text-left"
            data-aos="fade-up"
          >
            About Us
          </h1>
          <h1
            className="font-yeseva text-2xl text-g-brown text-center md:text-left"
            data-aos="fade-up"
          >
            Gulnar Café and Sweets w.l.l
          </h1>
          <p className="w-3/4 text-center md:text-left" data-aos="fade-up">
            Gulnar Café and Sweets w.l.l is committed to providing the best
            services, luxury Turkish sweets and restaurants services. The
            management of Gulnar has over ten years of experience in this jobs,
            starting with their first venture, Al Qala’a Café. After achieving
            great success, they decided to expand their business by opening Al
            Tayebat Restaurant with its three branches in Syria.
          </p>
          <Button
            first_text="About Us"
            second_text={
              <i className="fa-solid fa-arrow-right-long text-2xl"></i>
            }
            link={"/about"}
            fade={true}
          ></Button>
        </div>
      </div>
    </div>
  );
}
