import { useNavigate } from "react-router-dom";
import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { ON_LOGOUT } from "../Pages/Redux/popupSlice";

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Get the current user from Redux store
    const currentUser = useSelector((state) => state.popup.user)

    //handle logout
    const handleLogout = () => {
        dispatch(ON_LOGOUT());//clear Redux state
        navigate('/login')// Redirect to login page
    }
    return (
        <header className={classes.header}>
            {/* Left Navigation */}
            <nav className={classes.navLeft}>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/shop')}>Shop</button>
            </nav>

            {/* Logo in the center */}
            <div className={classes.logo} onClick={() => navigate('/')}>
                BOUTIQUE
            </div>

            {/* Right Navigation */}
            <nav className={classes.navRight}>
                <button onClick={() => navigate('/cart')}>Cart</button>

                {currentUser ? (
                    <>
                        <span>Welcome, {currentUser.fullName}!</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <button onClick={() => navigate("/login")}>Login</button>
                )}
            </nav>
        </header>)
}

export default Header