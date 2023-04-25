import "./Banner.scss";
import BannerImg from '../../../assets/pngegg.png'
import './stylebanner.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
const Banner = () => {
    return <div className="hero-banner">
        <div className="content ">
            <div   className="text-content">
                <h1> SALES</h1>
                <p> SONY WH-1000XM5 is a wireless headphone that provides high-resolution quality and high-quality sound with the industry's highest class noise canceling function that realizes the quietness of the "new generation".</p>
                <div className="ctas">
                    <div className="banner-cta"> Read More</div>
                    <button className="banner-cta v2 overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50"> Ship Now</button>
                   
                </div>
            </div>

            {/* <span className="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">animate-bounce
                <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </span> */}

            <motion.img variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="img inline-block animate-bounce rounded-full p-4  text-white" src={BannerImg} alt='123' />

        </div>
    </div>;
};

export default Banner;
