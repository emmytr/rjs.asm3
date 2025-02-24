import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_FROM_CART, UPDATE_CART } from "../Redux/cartSlice";
import { useEffect } from "react";
import classes from "./CartPage.module.css";
import { Trash2 } from "lucide-react";
import { Gift } from "lucide-react"; // Import the gift icon

function CartPage() {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(UPDATE_CART({ id, quantity }));
        }
    };

    const handleRemove = (id) => {
        dispatch(REMOVE_FROM_CART(id));
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (
        <div className={classes.cartPage}>
            <div className={classes.banner}>
                <div className={classes.bannerTitle}>CART
                </div>
                <div className={classes.bannerRoute}> CART
                </div>
            </div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className={classes.cartContainer}>
                    <div className={classes.cartList}>
                        <div className={classes.title}>
                            <span>IMAGE</span>
                            <span>PRODUCT</span>
                            <span>PRICE</span>
                            <span>QUANTITY</span>
                            <span>TOTAL</span>
                            <span>REMOVE</span>
                        </div>
                        {cart.map((item) => (
                            <div key={item.id} className={classes.cartItem}>
                                <span>
                                    <img src={item.image} alt={item.name} /></span>
                                <span>{item.name}</span>
                                <span style={{ color: "grey" }}>{formatPrice(item.price)} VND</span>
                                <span className={classes.quantityWrapper}>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                        &#9665;
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                        &#9655;
                                    </button>
                                </span>
                                <span style={{ color: "grey" }}>{formatPrice(item.price * item.quantity)} VND</span>
                                <span>
                                    <button className={classes.removeButton} onClick={() => handleRemove(item.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </span>


                            </div>
                        ))}
                        <div className={classes.title}>
                            <button className={classes.continueShopping} onClick={() => navigate("/shop")}> ← Continue Shopping</button>
                            <button className={classes.checkoutButton} onClick={() => navigate("/checkout")}>Proceed to Checkout  → </button>
                        </div>
                    </div>
                    <div className={classes.orderSummary}> CART TOTAL
                        <div className={classes.orderItem}>
                            <span>SUBTOTAL </span>
                            <span style={{ color: "grey" }}>{totalAmount.toLocaleString()} VND </span>
                        </div>
                        <div className={classes.orderItem}>
                            <span>TOTAL </span>
                            <span>{totalAmount.toLocaleString()} VND </span>
                        </div>
                        <div className={classes.couponContainer}>
                            <input className={classes.couponInput} placeholder="Enter your Coupon" />
                            <button className={classes.applyCouponButton}> <Gift size={16} className={classes.giftIcon} /> Apply Coupon</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
