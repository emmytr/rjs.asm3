import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CheckoutPage.module.css";

function CheckoutPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.address || !formData.email || !formData.phone) {
            alert("Please fill in all required fields!");
            return;
        }
        alert("Order placed successfully!");
        navigate("/order-confirmation");
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className={classes.checkoutContainer}>
            <div className={classes.banner}>
                <div className={classes.bannerTitle}>CHECKOUT
                </div>
                <div className={classes.bannerRoute}> HOME/ CART/ <span>CHECKOUT</span>
                </div>
            </div>
            <div className={classes.formContainer}>
                <h2>BILLING DETAIL</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Full Name Here!" required />

                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email Here!" required />

                    <label>Phone Number</label>
                    <input type="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone Number Here!" required />


                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Your Address Here!" required />



                    <button type="submit" className={classes.checkoutButton}>Place Order</button>
                </form>
            </div>

            <div className={classes.orderSummary}>
                <h2>YOUR ORDER</h2>
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className={classes.orderItem}>

                            <span>{item.name} {' '}</span>
                            <span>{formatPrice(item.price)} VND x{item.quantity}</span>


                        </div>
                    ))}
                </div>
                <div className={classes.totalAmount}>
                    <span>Total</span>
                    <span>{totalPrice.toLocaleString()} VND</span>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
