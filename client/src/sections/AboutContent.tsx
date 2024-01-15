import { CoffeeCup } from "../assets";

export default function AboutContent() {
  return (
    <>
      <div className="about-content-01 py-16">
        <div className="texts flex flex-col text-center container mx-auto w-full md:w-2/3 space-y-10 items-center">
          <h1
            className="font-yeseva text-g-dark-brown text-2xl md:text-5xl"
            data-aos="fade-up"
          >
            A wonderful coffee house that combines cozy ambiance and
            high-quality coffee.
          </h1>
          <p className="leading-10 text-left w-10/12 md:w-2/3 text-xl" data-aos="fade-up">
            Gulnar Café and Sweets w.l.l is committed to providing the best
            services, luxury Turkish sweets and restaurants services. The
            management of Gulnar has over ten years of experience in this jobs,
            starting with their first venture, Al Qala’a Café. After achieving
            great success, they decided to expand their business by opening Al
            Tayebat Restaurant with its three branches in Syria. They then
            opened a new branch in Canada, which received the trust of the
            Canadian Government’s Ministry of Health and Tourism with
            certificate number 9999, thanks to its outstanding success. Later,
            they opened a branch in Bahrain under the name Gulnar Café and
            Sweets w.l.l . The project was a huge success and encouraged them to
            think about developing the company in the Kingdom by increasing the
            branches and diversifying the products and services offered.
          </p>
          <h1
            className="font-yeseva text-g-dark-brown text-2xl md:text-5xl"
            data-aos="fade-up"
          >
            The brand and trademark
          </h1>
          <p className="leading-10 text-left w-10/12 md:w-2/3 text-xl" data-aos="fade-up">
            The brand name of the company (Gulnar Café and Sweets w.l.l) has
            been approved by the Ministry of Industry, Commerce and Tourism in
            the Kingdom of Bahrain under CR / 153367 /, and we are currently
            working on registering the name and logo as a trademark in all GCCC.
            The attached trademark has also been approved as the company’s logo
            on all companies official pages in the colors red and green and a
            white background.
          </p>
        </div>
      </div>
      <div className="about-content-02 py-16 flex flex-col text-center items-center justify-center space-y-10 border-t-[1px] border-g-dark-brown md:border-t-[0px]">
        <h1
          className="font-yeseva text-5xl md:text-7xl text-g-dark-brown text-center md:text-left w-10/12 md:w-3/5 md:ms-20"
          data-aos="fade-up"
        >
          {"We Serve One of the Best Coffee!​"}
        </h1>
        <div className="flex flex-col md:flex-row w-10/12 md:w-2/3 space-x-0 md:space-x-16">
          <img
            src={CoffeeCup}
            alt="Coffee Cup"
            className="w-full md:w-[300px] shadow-2xl rounded-lg md:rounded-none"
            data-aos="fade-up"
          />
          <div className="flex flex-col text-center md:text-left justify-center space-y-5 md:space-y-10 py-10 md:py-0">
            <h1
              className="font-yeseva text-g-dark-brown text-3xl"
              data-aos="fade-up"
            >
              The place where different coffee beans from all over the world
              meet.
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              enim dignissimos repellat voluptatem iste explicabo aperiam amet
              eos quasi cupiditate. Et, possimus obcaecati eveniet sapiente
              blanditiis accusamus asperiores. Minima quaerat, quas assumenda
              quod deserunt libero exercitationem, tempora velit aspernatur
              quidem aliquam cumque cum pariatur nisi debitis hic voluptatem
              eveniet. Quas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
