import { useState } from "react";
import ProductList from "../../Category/ProductList";
import classes from "./ShopPage.module.css";


function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All"); // Default: Show all
    const [searchTerm, setSearchTerm] = useState(""); // Store search input
    const [sortOption, setSortOption] = useState(""); // Store sorting option

    return (
        <div className={classes.shopContainer}>
            <h2 className={classes.pageTitle}>Shop Page</h2>

            <div className={classes.shopLayout}>
                {/* Sidebar Category */}
                <div className={classes.sidebar}>
                    <h3>CATEGORIES</h3>
                    <ul>
                        <h4 style={{ backgroundColor: "black", color: "white", padding: "10px 5px" }}>APPLE</h4>
                        <li onClick={() => setSelectedCategory("All")}>All</li>
                        <h4>IPHONE & MAC</h4>
                        <li onClick={() => setSelectedCategory("iphone")}>Iphone</li>
                        <li onClick={() => setSelectedCategory("ipad")}>Ipad</li>
                        <li onClick={() => setSelectedCategory("macbook")}>Macbook</li>
                        <h4>WIRELESS</h4>
                        <li onClick={() => setSelectedCategory("airpod")}>Airpod</li>
                        <li onClick={() => setSelectedCategory("watch")}>Watch</li>

                        <h4>OTHER</h4>
                        <li onClick={() => setSelectedCategory("mouse")}>Mouse</li>
                        <li onClick={() => setSelectedCategory("keyboard")}>Keyboard</li>
                        <li onClick={() => setSelectedCategory("other")}>Other</li>
                    </ul>
                </div>

                {/* Product List Section */}
                <div className={classes.productSection}>
                    <div className={classes.filters}>
                        {/* Search Box */}
                        <input
                            type="text"
                            placeholder="Enter search here..."
                            className={classes.searchBox}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {/* Sorting Box */}
                        <select
                            className={classes.sortBox}
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="">Default Sorting</option>
                            <option value="priceLowHigh">Price: Low to High</option>
                            <option value="priceHighLow">Price: High to Low</option>
                            <option value="name">Sort by Name</option>
                        </select>
                    </div>
                    <ProductList selectedCategory={selectedCategory} isHomePage={false} />
                </div>
            </div>
        </div >
    );
}

export default ShopPage;
