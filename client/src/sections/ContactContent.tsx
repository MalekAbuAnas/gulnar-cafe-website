import { ContactForm } from "../components";

export default function ContactContent() {
    return (
        <>
            <div className="w-full h-fit flex py-10 ">
                <div className="hidden w-1/2 text-center items-center justify-start md:flex flex-col">
                    <h1 className="font-yeseva text-8xl text-g-dark-brown">Contact</h1>
                    <h3>Get in touch with us and let’s create something amazing together</h3>
                </div>
                <div className="w-full md:w-1/2">
                    <ContactForm />
                </div>
            </div>
            <div className="w-full flex h-fit justify-center text-center py-10 px-20 bg-g-dark-brown text-[#fff]">
                <div className="w-1/4 space-y-10" data-aos="fade-up">
                    <h1 className="font-yeseva text-2xl">Location</h1>
                    <p className="capitalize leading-9">
                        DIYAR ALMUHARRAQ, <br />
                        KINGDOM OF BAHRAIN, <br />
                        SHOP: 660, <br />
                        BUILDING: 4441, <br />
                        ROAD: 6347, <br />
                        BLOCK: 263
                    </p>
                </div>
                <div className="w-1/4 space-y-10 flex flex-col" data-aos="fade-up">
                    <h1 className="font-yeseva text-2xl">Emails</h1>
                    <a href="mailto:info@gulnarcafe.com" className="duration-500 hover:text-g-brown">info@gulnarcafe.com</a>
                    <a href="mailto:ceo@gulnarcafe.com" className="duration-500 hover:text-g-brown">ceo@gulnarcafe.com</a>
                    <a href="mailto:gulnarcafe.bh@gmail.com" className="duration-500 hover:text-g-brown">gulnarcafe.bh@gmail.com</a>
                </div>
                <div className="w-1/4 space-y-10 flex flex-col" data-aos="fade-up">
                    <h1 className="font-yeseva text-2xl">Phone Numbers</h1>
                    <a href="tel:+97338469090" className="duration-500 hover:text-g-brown">+973 3846 9090</a>
                    <a href="tel:+97333445673" className="duration-500 hover:text-g-brown">+973 3344 5673</a>
                </div>
                <div className="w-1/4 space-y-10" data-aos="fade-up">
                    <h1 className="font-yeseva text-2xl">Opening Hours</h1>
                    <p className="leading-9">
                        Week Days: 10:00 - 10:00 <br />
                        Week end: 10:00 - 12:00
                    </p>
                </div>
            </div>
        </>
    )
}
