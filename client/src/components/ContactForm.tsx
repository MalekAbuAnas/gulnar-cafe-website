/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from ".";
import emailjs from '@emailjs/browser';
import { useRef } from "react";





export default function ContactForm() {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        emailjs.sendForm('service_8x8sc2k', 'template_pkcrzbb', form.current, 'wT66Fu0fVGRCrU4ck')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className="w-full md:w-fit flex flex-col items-center justify-center space-y-10 px-5 md:px-0" onSubmit={sendEmail} ref={form} action="POST" data-aos="fade-up">
            <div className="first-and-last w-full flex space-x-5 items-center justify-center">
                <input type="text" placeholder="First Name" name="first_name" className="h-[50px] w-full border-b-[1px] border-g-dark-brown text-g-dark-brown placeholder:text-g-dark-brown" required />
                <input type="text" placeholder="Last Name" name="last_name" className="h-[50px] w-full border-b-[1px] border-g-dark-brown text-g-dark-brown placeholder:text-g-dark-brown" required />
            </div>
            <input type="email" placeholder="Enter Email" name="user_email" className="h-[50px] w-full md:w-[500px] border-b-[1px] border-g-dark-brown text-g-dark-brown placeholder:text-g-dark-brown" required />
            <input type="text" placeholder="Enter Phone No" name="user_phone_num" className="h-[50px] w-full md:w-[500px] border-b-[1px] border-g-dark-brown text-g-dark-brown placeholder:text-g-dark-brown" required />
            <select name="type_of_message" className="h-[50px] w-full md:w-[500px] border-b-[1px] border-g-dark-brown text-g-dark-brown placeholder:text-g-dark-brown">
                <option value="inquiry">Type of Message</option>
                <option value="inquiry">Inquiry</option>
                <option value="complaint">Complaint</option>
                <option value="suggestion">Suggestion</option>
                <option value="order">Order</option>
            </select>
            <textarea name="message" placeholder="Enter Your Message" className="min-h-[100px] w-full md:min-w-[500px] md:max-w-[500px] border-b-[1px] border-g-dark-brown placeholder:text-g-dark-brown">
            </textarea>
            <Button first_text="Submit" second_text={<i className="fa-regular fa-paper-plane"></i>} link={""} fade={false} />
        </form>
    )
}
{/* <input type="submit" className="self-center h-[50px] w-[500px] bg-none text-g-dark-brown border-b-[1px] border-g-dark-brown duration-500 hover:bg-g-dark-brown hover:text-[#fff] hover:border-[#fff] cursor-pointer" /> */ }