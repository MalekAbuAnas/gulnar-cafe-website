import { Button } from "../components";

export default function Location() {
  return (
    <div className="location">
      <div className="location-texts-section w-full text-center pt-6 space-y-10">
        <h1 className="text-g-brown font-yeseva text-8xl" data-aos="fade-up">
          Our Location
        </h1>
        <h1 className="text-g-brown font-yeseva text-2xl" data-aos="fade-up">
          We are pleased with your visit
        </h1>
        <div className="flex flex-row boxes-container w-full items-center justify-center space-x-10 pt-10">
          <div
            className="box w-1/4 bg-[#fff] shadow-2xl h-[500px] rounded-lg"
            data-aos="flip-up"
          >
            <h1 className="font-yeseva text-black text-4xl mt-10 mb-10">
              Sa'ada
            </h1>
            <h3 className="text-xl font-yeseva text-g-brown">Openning Soon</h3>
          </div>
          <div
            className="box w-1/4 bg-[#fff] shadow-2xl h-[500px] rounded-lg space-y-10 items-center flex flex-col"
            data-aos="flip-up"
          >
            <h1 className="font-yeseva text-black text-4xl mt-10">
              Dragon City
            </h1>
            <h3 className="text-xl text-left leading-10 w-3/4 border-l-[1px] border-r-[1px] border-g-brown px-6">
              Kingdom of Bahrain,
              <br />
              Diar Al Muharraq,
              <br />
              Shop: 660,
              <br />
              Building: 4441,
              <br />
              Road: 6347,
              <br />
              Block: 263
            </h3>
            <div className="btn-container w-full flex justify-center">
              <Button
                first_text="View Location"
                link="https://www.google.com/maps/place/%D8%AC%D9%84%D9%86%D8%A7%D8%B1+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D9%88%D8%B3%D9%88%D9%8A%D8%AA%E2%80%AD/@26.30546,50.624935,16z/data=!4m6!3m5!1s0x3e49a7fd5ea44c63:0xf2533a74e118e68f!8m2!3d26.3054595!4d50.624935!16s%2Fg%2F11tsjx3v98?hl=ar&entry=ttu"
                second_text={
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                }
              ></Button>
            </div>
          </div>
          <div
            className="box w-1/4 bg-[#fff] shadow-2xl h-[500px] rounded-lg"
            data-aos="flip-up"
          >
            <h1 className="font-yeseva text-black text-4xl mt-10 mb-10">
              Marasi Mall
            </h1>
            <h3 className="text-xl font-yeseva text-g-brown">Openning Soon</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
