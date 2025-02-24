
import classes from './ProductList.module.css'

import ProductList from "./ProductList";


const ProductAll = () => {

    return (
        <div className={classes.container}>
            {/* Title Section */}
            <div className={classes.titleSection}>
                <div className={classes.subtitle}>MAKE THE HARD WAY</div>
                <h2 className={classes.title}>TOP TRENDING PRODUCTS</h2>
            </div>
            <ProductList selectedCategory="All" isHomePage={true} />

        </div >)
}

export default ProductAll