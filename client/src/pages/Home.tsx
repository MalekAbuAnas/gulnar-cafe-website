import {
  About,
  ByForHome,
  FeaturedMenu,
  Hero,
  Location,
  Reviews,
  Footer,
  LowerFooter
} from "../sections/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Separator } from "../components";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero
        title="Gulnar Cafe & Sweets"
        Subtitle="Enjoy the flavor of life with a cup of Turkish coffee"
        btn_frst_text="Explore More"
        btn_second_text="To The Menu"
      />
      <About />
      <Separator />
      <FeaturedMenu />
      <Reviews />
      <Separator />
      <Location />
      <ByForHome />
      <Separator />
      <Footer />
      <LowerFooter />
    </>
  );
}
