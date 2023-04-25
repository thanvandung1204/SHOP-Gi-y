import "./Category.scss";
import img1 from '../../../assets/category/logo-cac-hang-giay-noi-tieng-9.png'
import img2 from '../../../assets/category/6009ca8e42063e000443065e.png'
import img3 from '../../../assets/category/pngtree-sneaker-shoe-logos-can-be-used-for-store-logos-or-shoe-image_340677.jpg'
import img4 from '../../../assets/category/cat-4.jpeg'

const Category = () => {
    return <div className="shop-by-category">

        <div className="categories">
            <div className="category">
                <img src={img1} alt='123' />
            </div>
            <div className="category">
                <img src={img2} alt='123' />
            </div>
            <div className="category">
                <img src={img3} alt='123' />
            </div>
            <div className="category">
                <img src={img4} alt='123' />
            </div>

        </div>

    </div>;
};

export default Category;
