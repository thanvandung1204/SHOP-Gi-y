import "./SingleProduct.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa"
import RelatedProducts from './RelatedProducts/RelatedProducts';
import prod from '../../assets/shoe-store-product-images/p2 Air Jordan XXXVII Low PF/thumbnail.webp'
import Category from '../Home/Category/Category';
import "./SingleProduct.scss"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useState } from "react";
import { getALl, getId } from "../../api/products";
import { useParams } from "react-router-dom";
import { useEffect ,useContext} from "react";
import { Context } from "../../utils/Context";
const SingleProduct = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    const [showSuccesss,setShowSuccess] = useState(false)
    useEffect(() => {
        if (showSuccesss) {
            setTimeout(() => {
                    setShowSuccess(false)
                },1500)
            }
    })

    const showItem = async () => {
        if (id) {
        const { data } = await getId(id)
            setProducts(data)
            console.log(data)
        }
    }
    useEffect(() => {
        showItem()
    },[])
    return <div className="single-product-main-content">
        
        <div className="layout">
            
            <div className="single-product-page">
                <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="left">
                    <img src={products.image} alt="123" />
                </motion.div>
                <motion.div variants={fadeIn('left', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="right">
                    <span className="name"> { products.name}</span>
                    <span className="price"> Price :<span className="text-red-500 text-3xl"> { products.price} $</span>  </span>
                    <span className="desc leading-6"> <span className="text-slate-900">{products.description }</span>  </span>
                    <div className="cart-buttons">
                        <div className="quanlity-buttons">
                            <span> - </span>
                            <span> 0 </span>
                            <span> + </span>
                        </div>

                        <button onClick={() => {
                            setShowSuccess(true)
                        }}  className="add-to-cart transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  flex overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:bg-red-300"><FaCartPlus size={20} /> ADD TO CART </button>
                        {showSuccesss && (
                            <div className="success-boxx">
                            <span className="tick-icon">&#10004;</span>
                <span className="success-text text-2x">Thêm Thành công!</span>
                            </div>
                    )}
                    </div>
                    {/*  */}
                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold "> Category:
                            <span className="pl-5"> JokeDan R1</span>

                        </span>
                        <span className="text-bold text-2xl"> Share:
                            <span className="social-icon flex mt-5">
                                <FaFacebookF className="text-blue-500 hover:scale-150" size={26} />
                                <FaTwitter className="text-blue-300 hover:scale-150" size={26} />
                                <FaInstagram  className="text-rose-300 hover:scale-150"size={26} />
                                <FaLinkedinIn className="text-blue-500 hover:scale-150" size={26} />
                                <FaPinterest className="text-orange-300 hover:scale-150" size={26} />
                            </span>

                        </span>

                    </div>

                </motion.div>
            </div>
            <RelatedProducts />
        </div>
    </div>;
};

export default SingleProduct;
