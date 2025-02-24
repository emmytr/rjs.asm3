import { useNavigate } from "react-router-dom";
import classes from './Banner.module.css'

function Banner() {
    const navigate = useNavigate();
    return (
        <div className={classes.banner}>
            <div>NEW INSPIRATION</div>
            <h2>20% OFF ON NEW <br />
                SEASON</h2>
            <button onClick={() => navigate('/shop')}> Browse Collection</button>
        </div>)
}

export default Banner