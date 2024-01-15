import { Footer, LowerFooter, PagesHero, ServicesContent } from "../sections";

export default function Services() {
  return (
    <>
      <PagesHero title="Our Services" subtitle="Proud to serve you" callToAction={false} />
      <ServicesContent />
      <Footer />
      <LowerFooter />
    </>
  );
}
