import classes from './Other.module.css'
function Other() {
    return (
        <div className={classes.container}>

            <div className={classes.para1}>
                <div className={classes.box}>
                    <h2>FREE SHIPPING</h2>
                    <div>Free shipping worldwide</div>
                </div>
                <div className={classes.box}>
                    <h2>24/7 SERVICE</h2>
                    <div>Free shipping worldwide</div>
                </div>
                <div className={classes.box}>
                    <h2>FESTIVAL OFFER</h2>
                    <div>Free shipping worldwide</div>
                </div>
            </div>
            <div className={classes.para2}>
                <div className={classes.group1}>
                    <h2>LET'S BE FRIENDS</h2>
                    <div>Lorem ipsum dolor sit amet. </div>
                </div>
                <div className={classes.group2}>
                    <input type="email" placeholder="Enter your email address" className={classes.input} />
                    <button type="button" className={classes.button}>Submit</button>
                </div>

            </div>

        </div >)
}

export default Other