import {
  About,
  ByForHome,
  FeaturedMenu,
  Hero,
  Location,
  Reviews,
} from "../sections/index";

export default function Home() {
  return (
    <>
      <Hero
        title="Gulnar Cafe & Sweets"
        Subtitle="Enjoy the flavor of life with a cup of Turkish coffee"
        btn_frst_text="Explore More"
        btn_second_text="To The Menu"
      />
      <About />
      <FeaturedMenu />
      <Reviews />
      <Location />
      <ByForHome />
    </>
  );
}
