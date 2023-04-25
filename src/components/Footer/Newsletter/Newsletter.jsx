import "./Newsletter.scss";
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
const Newsletter = () => {
    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div  className="newsletter-selection">

                <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="newsletter-content">
                    <span className="small-text"> News Letter</span>
                    <span className="big-text"> Sign up for latest updates and offers</span>
                    <div className="form">
                        <input type='text' placeholder="Email Address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="text"> Will be used in accordance with our Privacy Policy</div>
                    <div className='social-icon'>
                        <div className="icon">
                            <FaFacebook size={14} />
                        </div>
                        <div className="icon">
                            <AiFillTwitterCircle size={14} />
                        </div>
                        <div className="icon">
                            <AiFillInstagram size={14} />
                        </div>
                        <div className="icon">
                            <AiFillGithub size={14} />
                        </div>
                    </div>


                </motion.div>
            </div>
        </div>

    )
};

export default Newsletter;
