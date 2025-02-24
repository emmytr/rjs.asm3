// import { useNavigate } from "react-router-dom";
import classes from './Cate.module.css'

function Cate() {

    return (
        <div className={classes.cateContainer}>
            <div className={classes.catText}>
                <h3>CAREFULLY CREATED COLLECTIONS</h3>
                <h2>BROWSE OUT CATEGORIES</h2></div>
            <div className={classes.catImg}>
                <div className={classes.row1}>
                    <img src='/ResourcePhoto/product_1.png' alt="Category 1" />
                    <img src="/ResourcePhoto/product_2.png" alt="Category 2" />
                </div>
                <div className={classes.row2}>
                    <img src="/ResourcePhoto/product_3.png" alt="Category 3" />
                    <img src="/ResourcePhoto/product_4.png" alt="Category 4" />
                    <img src="/ResourcePhoto/product_5.png" alt="Category 5" />
                </div>
            </div>


        </div>)
}

export default Cate