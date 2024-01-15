import { ContactContent, Footer, LowerFooter, PagesHero } from "../sections";

export default function Contact() {
  return (
    <>
      <PagesHero callToAction={false} title="Contact Us" subtitle="" />
      <ContactContent />
      <Footer />
      <LowerFooter />
    </>
  );
}
