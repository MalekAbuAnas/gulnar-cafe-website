import { AboutContent, Footer, LowerFooter, PagesHero } from "../sections";

export default function About() {
  return (
    <>
      <PagesHero title="About Us" subtitle="Gulnar Cafe & Sweets w.l.l" callToAction={false} />
      <AboutContent />
      <Footer />
      <LowerFooter />
    </>
  );
}
