/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap"
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function separator() {

    const timeline = gsap.timeline();
    const cubeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        timeline.to(cubeRef.current, {
            scrollTrigger: {
                trigger: cubeRef.current,
                start: 'top bottom',
                end: 'top top',
                scrub: 3,
            },
            duration: 1,
            rotation: 720,
            ease: 'none',
            x: '93vw'
        })
    })

    return (
        <>
            <div className="hidden md:block separator w-full h-fit py-[30px] bg-[#FDF5F0]">
                <div className="cube w-[80px] h-[80px] bg-none border-[2px] border-g-dark-brown p-[5px]" ref={cubeRef}>
                    <div className="cube w-[80px] h-[80px] bg-none border-[2px] border-g-brown p-[5px]">
                        <div className="cube w-[80px] h-[80px] bg-none border-[2px] border-g-green">

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="separator w-full h-[40px] bg-[#FDF5F0]">
                <div className="cube w-[40px] h-[40px] bg-none border-[10px] border-g-dark-brown" ref={cubeRef02}></div>
            </div> */}
        </>
    )
}
