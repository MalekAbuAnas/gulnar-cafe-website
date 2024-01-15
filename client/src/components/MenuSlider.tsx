import { useRef, useState } from "react";
import { Page01, Page02, Page03, Page04, Page05, Page06, Page07, Page08, Page09, Page10, Page11, Page12, Page13, Page14, Page15 } from "../assets";
import gsap from "gsap";

const slides = [
    Page01, Page02, Page03, Page04, Page05, Page06, Page07, Page08, Page09, Page10, Page11, Page12, Page13, Page14, Page15
];

export default function MenuSlider() {
    const [slide, setSlide] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);

    const timeline = gsap.timeline();

    const nextSlide = () => {
        timeline.from(imageRef.current, {
            duration: 0.8,
            opacity: 0,
        })
        setSlide(slide + 1);
    }

    const prevSlide = () => {
        timeline.from(imageRef.current, {
            duration: .7,
            opacity: 0,
        });
        setSlide(slide - 1);
    }
    if (slide > 14) {
        setSlide(0);
    } else if (slide < 0) {
        setSlide(14);
    }
    return (
        <div className="py-10 container mx-auto flex justify-center items-center">
            <button className="hidden md:block text-2xl mx-[100px] rounded-full text-[#fff] bg-[#00000060] duration-500 hover:bg-[#000000b2] w-[50px] h-[50px]" onClick={prevSlide}>{"<"}</button>
            <div className="container flex flex-col md:flex-row overflow-hidden w-[500px]">
                <img src={slides[slide]} alt="slide" ref={imageRef} />
                <div className="flex md:hidden w-full h-fit items-center justify-center space-x-16 py-5">
                    <button className="text-2xl rounded-full text-[#fff] bg-[#00000060] duration-500 hover:bg-[#000000b2] w-[50px] h-[50px]" onClick={prevSlide}>{"<"}</button>
                    <button className="text-2xl rounded-full text-[#fff] bg-[#00000060] duration-500 hover:bg-[#000000b2] w-[50px] h-[50px]" onClick={nextSlide}>{">"}</button>
                </div>
            </div>
            <button className="hidden md:block text-2xl mx-[100px] rounded-full text-[#fff] bg-[#00000060] duration-500 hover:bg-[#000000b2] w-[50px] h-[50px]" onClick={nextSlide}>{">"}</button>
        </div>
    )
}
// {
//     slides.map((slide, index) => (
//         <img src={slide} className="w-fit" alt="slide" key={index} />
//     ))
// }useEffect(() => {}, [slide]);