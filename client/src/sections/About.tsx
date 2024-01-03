import { Shop } from "../assets";

export default function About() {
  return (
    <div className="about">
      <div className="container flex items-center justify-center w-full h-full mx-auto">
        <div className="w-1/2 ml-40">
          <img src={Shop} alt="Shop" width="600px" className="shadow-lg mb-1" />
        </div>
        <div className="w-1/2 space-y-6">
          <h1 className="font-yeseva text-8xl text-g-brown">About Us</h1>
          <h1 className="font-yeseva text-2xl text-g-brown">
            Gulnar Café and Sweets w.l.l
          </h1>
          <p className="w-3/4">
            Gulnar Café and Sweets w.l.l is committed to providing the best
            services, luxury Turkish sweets and restaurants services. The
            management of Gulnar has over ten years of experience in this jobs,
            starting with their first venture, Al Qala’a Café. After achieving
            great success, they decided to expand their business by opening Al
            Tayebat Restaurant with its three branches in Syria.
          </p>
          <button className="Button mt-6">
            <div className="Button-cube">
              <span className="text-md">Read More</span>
              <span>
                <i className="fa-solid fa-arrow-right-long text-2xl"></i>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
/* <div className="container flex mx-auto p-6 justify-center text-center items-center h-1/2 w-full">
        <img
          src={Shop}
          width="600px"
          alt="shop image"
          className="shadow-lg self-right mx-10"
          draggable="false"
        />
        <div className="texts-container w-1-2 flex flex-col justify-center items-center space-y-6 text-left">
          <h1 className="font-yeseva text-g-brown text-8xl text-left">
            About Us
          </h1>
          <h1 className="font-yeseva text-g-brown text-2xl text-left">
            Gulnar Café and Sweets w.l.l
          </h1>
          <p className="text-black w-1/2 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            asperiores expedita unde praesentium autem nulla reprehenderit.
            Dolorum cupiditate odit aut.
          </p>
        </div>
      </div> */
