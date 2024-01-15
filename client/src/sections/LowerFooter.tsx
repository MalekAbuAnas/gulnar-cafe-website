import { Link } from "react-router-dom";

export default function LowerFooter() {
    return (
        <div className="lower-footer w-full h-fit py-7 md:py-6 border-t-[1px] border-g-dark-brown">
            <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-center space-y-5 md:space-y-0">
                <h1>Copyrights&copy; are recieved to <Link className="duration-500 hover:text-g-brown" to={'/'}>Gulnar Cafe & Sweets</Link></h1>
                <h1>Powered by: <Link className="duration-500 hover:text-g-brown" to={"https://malek.alsayeddesign.com/"}>Malek Alsayed</Link></h1>
            </div>
        </div>
    )
}
