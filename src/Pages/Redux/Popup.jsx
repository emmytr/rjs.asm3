import { useDispatch, useSelector } from "react-redux";
import { HIDE_POPUP } from "./popupSlice";
import classes from './Popup.module.css';
import { useNavigate } from "react-router-dom";

const Popup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isVisible, product, position } = useSelector((state) => state.popup);

    if (!isVisible || !product) return null;

    return (
        <>
            {/* Background Gray Overlay */}
            <div className={classes.overlay} onClick={() => dispatch(HIDE_POPUP())}></div>

            {/* Popup Content */}
            <div
                className={classes.popupOverlay}

                onClick={(e) => e.stopPropagation()}
            >
                <div className={classes.popupContent}>
                    <button className={classes.closeButton} onClick={() => dispatch(HIDE_POPUP())}>×</button>
                    <img src={product.img1} alt={product.name} />
                    <div className={classes.popupDetails}>
                        <h2>{product.name}</h2>
                        <h3 className={classes.productPrice}>
                            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                        </h3>
                        <p>{product.short_desc}</p>
                        {/* <button
                            onClick={() => navigate(`/detail/${product._id.$oid}`)}
                            className={classes.detailButton}
                        >
                            <i className="fas fa-cart-plus"></i> View Detail
                        </button> */}
                        <button
                            onClick={() => navigate(`/detail/${product._id?.$oid || product._id}`)}
                            className={classes.detailButton}
                        >
                            <i className="fas fa-cart-plus"></i> View Detail
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
