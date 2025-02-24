import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from './ProductList.module.css'
import { SHOW_POPUP } from "../Pages/Redux/popupSlice";
import { useDispatch } from "react-redux";


const ProductList = ({ selectedCategory, isHomePage, excludeProductId, isRelatedProducts }) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            .then((res) => res.json())
            .then((data) => {
                const listedProducts = data.slice(0, 8);
                setProducts(listedProducts)
            })
            .catch((err) => console.error('Error fetching data:', err))
    }, []);

    // Function to format price: "10999000" → "10.999.000"
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    // Filter products based on category
    let filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);

    // If showing related products, exclude the current product
    if (isRelatedProducts) {
        filteredProducts = filteredProducts.filter(
            (product) => (product._id.$oid) !== excludeProductId
        );
    }

    return (
        <div className={classes.productList}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product._id}
                        className={classes.productCard}
                        onClick={() => {
                            if (isHomePage) {
                                dispatch(SHOW_POPUP(product))
                                // navigate(`/detail/${product._id.$oid || product._id}`)
                            } else {
                                navigate(`/detail/${product._id.$oid || product._id}`)
                            }
                        }}
                    >
                        <img src={product.img1} alt={product.name} className={classes.productImage} />
                        <h3 className={classes.productName}>{product.name}</h3>
                        <p className={classes.productPrice}>
                            <strong>Price:</strong> {formatPrice(product.price)} VND
                        </p>
                    </div>
                ))
            ) : (
                <p className={classes.noProducts}>No products available in this category.</p>
            )}
        </div >

    )
}

export default ProductList
