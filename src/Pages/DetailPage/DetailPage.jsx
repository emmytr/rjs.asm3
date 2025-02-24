import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from './DetailPage.module.css';
import { ADD_TO_CART } from "../Redux/cartSlice";
import ProductList from "../../Category/ProductList";

function DetailPage() {
    const { id } = useParams();  // Get product ID from URL
    const navigate = useNavigate();
    const reduxProduct = useSelector((state) => state.popup.product); // Product from Redux
    const [product, setProduct] = useState(reduxProduct || null);  // Use Redux product first
    const [loading, setLoading] = useState(!reduxProduct); // Only load if Redux has no data
    const dispatch = useDispatch(); // Get dispatch function
    const [quantity, setQuantity] = useState(1); // Initialize quantity

    useEffect(() => {
        console.log("abc")
        console.log(reduxProduct);

        if (!reduxProduct) {

            setLoading(true);
            console.log(loading);
            fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
                .then((res) => {
                    const result = res.json();
                    console.log(result);
                    console.log("abv2");
                    return result;
                })
                .then((data) => {
                    console.log("abc1")
                    console.log(data)
                    console.log(id)
                    const foundProduct = data.find(
                        (item) => item._id?.$oid === id || item._id === id
                    );
                    console.log(foundProduct);
                    setProduct(foundProduct);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching product:", err);
                    setLoading(false);
                });
        }
    }, [id, reduxProduct]);


    const handleAddToCart = () => {
        if (product) {
            dispatch(ADD_TO_CART({
                id: product._id?.$oid || product._id,
                name: product.name,
                price: product.price,
                image: product.img1,
                quantity
            }));
            alert("Product added to cart!");
        }
    };

    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>No product found. <button onClick={() => navigate("/")}>Go back</button></p>;
    }

    return (
        <div className={classes.popupContent} key={id}>
            <div className={classes.popupTop}>
                <img src={product.img1} alt={product.name} />
                <div className={classes.popupDetails}>
                    <h2>{product.name}</h2>
                    <h3 className={classes.productPrice}>
                        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                    </h3>
                    <p>{product.short_desc}</p>
                    <div>CATEGORY: {product.category}</div>
                    <div className={classes.cartActions}>
                        <div className={classes.quantityWrapper}> QUANTITY
                            <button
                                className={classes.quantityButton}
                                onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                            > ◀  </button>

                            <span className={classes.quantityInput}>{quantity}</span>

                            <button
                                className={classes.quantityButton}
                                onClick={() => setQuantity(prev => prev + 1)}
                            > ▶</button>
                        </div>

                        {/* Add to Cart Button */}
                        <button className={classes.detailButton} onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

            <div className={classes.longDescContainer}>
                <h2 className={classes.longDesc}>Description</h2>
                <h4 className={classes.title}>PRODUCT DESCRIPTION</h4>
                <p className={classes.productDescription}>{product.long_desc}</p>
            </div>

            <div className={classes.longDescContainer}>
                <h4 className={classes.title}>RELATED PRODUCTS</h4>
                <div>
                    {product.category ? (
                        <ProductList selectedCategory={product.category} excludeProductId={product._id.$oid} isRelatedProducts={true} />
                    ) : (
                        <p >No other products available in this category.</p>
                    )}
                </div>
            </div>

        </div>
    );
}

export default DetailPage;
