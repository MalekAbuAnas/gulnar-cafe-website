import { ContactForm } from "../components";

export default function ContactContent() {
    return (
        <div className="w-full h-fit flex py-10 ">
            <div className="hidden w-1/2 text-center items-center justify-start md:flex flex-col">
                <h1 className="font-yeseva text-8xl text-g-dark-brown">Contact</h1>
                <h3>Get in touch with us and let’s create something amazing together</h3>
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm />
            </div>
        </div>
    )
}
