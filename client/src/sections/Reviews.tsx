/* eslint-disable no-irregular-whitespace */
import { User01, User02, User03 } from "../assets/index";
import { useState } from "react";

const comments = [
  {
    icon: User01,
    link: "https://www.google.com/maps/contrib/110111441781402839555/reviews?hl=ar",
    user: "Yousif Alsihati",
    comment:
      "محل تركي ممتاز وطعم تركي الاصيل انصح به حيث توجد اشياء كثيرة من قهوة ومن حلقوم وقهوة تركية والايسكريم وكذلك المكان موجود في داخل السوق الصيني في الوسط وجلسات خارجية وداخلية في المجمع شي ممتاز جدا جدا",
  },
  {
    icon: User02,
    link: "https://www.google.com/maps/contrib/104771787635393188596/reviews?hl=ar",
    user: "Albaraa Hasan",
    comment:
      "مقهى جميل جدا ، الحلويات مميزة ، والجلسات والضيافة رائقة جدا ، والفريق خلوق",
  },
  {
    icon: User03,
    link: "https://www.google.com/maps/contrib/110132139736651304399/reviews?hl=ar",
    user: "AbuHamad",
    comment:
      "مقهى بطابع تركي يقدم السميت الحلا القهوة الشاي الايسكريم ، طعم طيب جدا و أفضل الموجود داخل السوق الصيني ، يبيع قهوة و شاي و حلقوم جلساته حلوة و شغله مرتب ممتاز للإستراحة .",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? comments.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === comments.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="reviews">
      <div className="title-container container mx-auto text-center">
        <h1
          className="font-yeseva text-[#fff] text-8xl pt-20"
          data-aos="fade-up"
        >
          Reviews
        </h1>
        <h1 className="font-yeseva text-2xl text-[#fff]" data-aos="fade-up">
          Our average customer rating is 4.8 / 5​
        </h1>
      </div>

      <div
        className="slider mx-auto container h-2/3 py-16 px-4 relative text-center items-center justify-center flex flex-col space-y-10"
        data-aos="fade-up"
      >
        <div className="flex space-x-6 container items-center justify-center textc-center mx-auto">
          <img src={comments[currentIndex].icon} alt="User" />
          <a href={comments[currentIndex].link} target="_blank">
            <h1 className="font-yeseva text-2xl text-[#fff] duration-300 hover:text-g-green">
              {comments[currentIndex].user}
            </h1>
          </a>
        </div>
        <p className="text-xl text-[#fff] self-center text-center w-2/3">
          {comments[currentIndex].comment}
        </p>
        <button
          onClick={prevSlide}
          className="w-12 h-12 absolute top[50%] translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-[#fff] hover:bg-[#c4c4c4] duration-500 text-black cursor-pointer"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 absolute top[50%] translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-[#fff] hover:bg-[#c4c4c4] duration-500 text-black cursor-pointer"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
