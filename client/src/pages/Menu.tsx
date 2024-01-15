import { MenuSlider } from "../components";
import { Footer, LowerFooter, PagesHero } from "../sections";
import { MenuPDF } from "../assets";

export default function Menu() {
  return (
    <div className="menu">
      <PagesHero
        title="Menu"
        subtitle="Enjoy the Turkish flavor"
        callToAction={true}
        first_text="Download Menu"
        second_text="PDF Menu"
        link={MenuPDF}
        fade={true}
      />
      <MenuSlider />
      <Footer />
      <LowerFooter />
    </div>
  );
}
