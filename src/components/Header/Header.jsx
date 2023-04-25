import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import { GrLogout } from "react-icons/gr"

import Search from './Search/Search'
import Cart from '../Cart/Cart'
import { Context } from "../../utils/Context";
const Header = () => {
    const [scroll, setScroll] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()

    const handelScroll = () => {
        const offset = window.scrollY;
        if (offset > 300) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handelScroll)
    }, [])
    return (
        <>
            <header className={`main-header ${scroll ? 'sticky-header' : ''}`}>
                    <div className="header-content">
                        <ul className="left">
                            <li onClick={()=> navigate("/")} className="overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50">Home</li>
                            <li onClick={()=>navigate("/about")} className="overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50">About</li>
                            <li onClick={()=> navigate("/category/1")}  className="overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50">Category</li>
                        </ul>
                        <div className="center">
                            {/* ThanhDoShop */}
                        </div>
                        <div className="right">
                            <TbSearch onClick={()=>setShowSearch(true)}/>
                            <AiOutlineHeart />
                                
                            <span className="cart-icon" onClick={()=>setShowCart(true)}>
                                <CgShoppingCart />
                            <span> 7 </span>
                            
                        </span>
                        </div>
                    </div>
            </header>
            {showCart && <Cart setShowCart={ setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch}/>}

        </>
    )
    
};

export default Header;
