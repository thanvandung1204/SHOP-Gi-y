import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from "./utils/Context";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Admin from "./admin/admin";
import AddItem from "./admin/addItem";
import Update from "./admin/update";
import About from "./components/about/About";

function App() {
    return (
        <BrowserRouter>
            <AppContext />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Category/:id" element={<Category />} />
                <Route path="/Products/:id" element={<SingleProduct />} />
                <Route path="/signup" element={<Signup />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/brd" element={<SingleProduct />} />
                <Route exact path="/auth/admin" element={<Admin />} />
                <Route exact path="/auth/admin/add" element={<AddItem />} />
                <Route exact path="/auth/admin/update/:id" element={<Update />} />
                <Route exact path="/about" element={<About />} />




            </Routes>
            <Newsletter />
            <Footer />
        </BrowserRouter>


    );
}

export default App;
