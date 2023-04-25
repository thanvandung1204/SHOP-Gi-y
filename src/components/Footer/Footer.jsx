import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { MdPayment, MdPayments, MdOutlinePayments } from 'react-icons/md'
import { React } from 'react';
const Footer = () => {
    return <footer className="footer">
        <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    lorem ipsum dolor sit amet, consectetur adip
                </div>
            </div>
            <div className="col"> <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Sunt velit cupidatat ipsum irure laborum et.
                    </div>
                </div>

                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: +84123456789.
                    </div>
                </div>

                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: thanhdo9xi@gmail.com.
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Category</div>
                <span className="text"> JokeDan</span>
                <span className="text"> Nike 3+</span>
                <span className="text"> Mc Queen</span>
                <span className="text"> Vans</span>
                <span className="text"> Authentic</span>
                <span className="text"> Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text"> Home</span>
                <span className="text"> About</span>
                <span className="text"> Privacy Policy</span>
                <span className="text"> Returns</span>
                <span className="text"> Terms & Conditions</span>
                <span className="text"> Contact Us</span>
            </div>
        </motion.div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JokeDan Store 2023 CREATED BY VANDUNG IS DEV. PREMIUM
                </div>
                <div>
                    {/* <MdPayment />
                    <MdPayments />
                    <MdOutlinePayments /> */}
                </div>

            </div>
        </div>
    </footer>;
};

export default Footer;
