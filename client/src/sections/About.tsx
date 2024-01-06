import { Shop } from "../assets";
import { Button } from "../components";

export default function About() {
  return (
    <div className="about">
      <div className="container flex items-center justify-center w-full h-full mx-auto">
        <div className="w-1/2 ml-40">
          <img
            src={Shop}
            alt="Shop"
            width="600px"
            className="shadow-lg mb-1"
            data-aos="flip-up"
          />
        </div>
        <div className="w-1/2 space-y-6">
          <h1 className="font-yeseva text-8xl text-g-brown" data-aos="fade-up">
            About Us
          </h1>
          <h1 className="font-yeseva text-2xl text-g-brown" data-aos="fade-up">
            Gulnar Café and Sweets w.l.l
          </h1>
          <p className="w-3/4" data-aos="fade-up">
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
            link={""}
          ></Button>
        </div>
      </div>
    </div>
  );
}
