import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ON_LOGIN } from '../Redux/popupSlice';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [error, setError] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        //Check if any field is empty
        if (!email || !passWord) {
            alert('Please enter both Email and Password');
            return
        }

        const storedUsers = JSON.parse(localStorage.getItem('UserArr') || [])

        const user = storedUsers.find(user => user.email === email && user.passWord === passWord)
        if (user) {
            // Dispatch login action to Redux
            dispatch(ON_LOGIN(user))

            //Store login state to localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user))

            alert("Login successful")
            navigate('/home')

        } else {
            setError('Invalid Email or Password')
        }
    }

    return (

        <div className={classes["login-container"]}>
            <form className={classes["login-form"]} onSubmit={handleLogin}>
                <h2>Sign In</h2>
                {error && <p className={classes["error-message"]}>{error}</p>}

                <input className={classes["login-input"]} placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                <input className={classes["login-input"]} placeholder="Password" type="password" onChange={(e) => setPassWord(e.target.value)} required />
                <button className={classes["login-button"]} >Login</button>
            </form>
            <div className={classes["create-account"]}>
                Create an account? <button onClick={() => navigate('/register')}>Click</button>
            </div>
        </div >
    );
}

export default LoginPage;
