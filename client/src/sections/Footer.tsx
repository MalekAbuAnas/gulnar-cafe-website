import { Link } from 'react-router-dom'
import { Logo } from '../assets/index'

export default function Footer() {
    return (
        <div className="footer w-full flex flex-col md:flex-row items-center justify-center h-fit py-7 md:py-10 space-y-5 md:space-y-0">
            <div className="w-full md:w-1/5 h-fit flex items-center justify-center md:min-h-[300px]">
                <Link to={"/"}><img src={Logo} alt="logo" width="200px" className='self-center' /></Link>
            </div>
            <div className="w-full md:w-1/5 h-fit md:min-h-[300px] items-center text-center md:text-left justify-center space-y-10 flex flex-col">
                <h1 className='font-yeseva text-xl'>Follow Us</h1>
                <a href="https://www.instagram.com/gullnar_1945/" className='duration-500 hover:text-g-brown'><i className="fa-brands fa-instagram text-2xl"></i></a>
            </div>
            <div className="w-full md:w-1/5 h-fit md:min-h-[300px] items-center text-center md:text-left justify-center space-y-10 flex flex-col">
                <h1 className='font-yeseva text-xl'>Location</h1>
                <p className='leading-9'>
                    Kingdom of Bahrain, <br />
                    Diar Al Muharraq, <br />
                    Shop: 660, <br />
                    Building: 4441, <br />
                    Road: 6374, <br />
                    Block: 263
                </p>
            </div>
            <div className="w-full md:w-1/5 h-fit md:min-h-[300px] items-center text-center md:text-left justify-center space-y-10 flex flex-col">
                <h1 className='font-yeseva text-xl'>Contact Us</h1>
                <p className='leading-9'>
                    <a href="tel:+97333445673" className='duration-500 hover:text-g-brown'>+973 3344 5673</a> <br />
                    <a href="tel:+97338469090" className='duration-500 hover:text-g-brown'>+973 3846 9090</a> <br />
                    <a href="mailto:ceo@gulnarcafe.com" className='duration-500 hover:text-g-brown'>ceo@gulnarcafe.com</a> <br />
                    <a href="mailtogulnarcafe.bh@gmail.com" className='duration-500 hover:text-g-brown'>gulnarcafe.bh@gmail.com</a>
                </p>
            </div>
        </div>
    )
}
