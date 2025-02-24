import classes from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterPage() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        //Get user data from local storage
        const storedUsers = JSON.parse(localStorage.getItem('UserArr')) || []

        //Check the existence of email 
        const isEmailExist = storedUsers.some(user => user.email === email);
        if (isEmailExist) {
            alert("Email already exists");
            return;
        }
        if (passWord.length < 8) {
            alert('Password must be at least 8 characters')
            return
        }

        //Add new user
        const newUser = { fullName, email, passWord, phone };
        storedUsers.push(newUser);
        localStorage.setItem('UserArr', JSON.stringify(storedUsers))

        alert("Successful register!");
        navigate('/Login')
    }

    return (
        <div className={classes["register-container"]}>
            <form className={classes["register-form"]} onSubmit={handleRegister}>
                <h2>Sign Up</h2>
                <input className={classes["register-input"]} placeholder="Full Name" type="text" onChange={(e) => setFullName(e.target.value)} required />
                <input className={classes["register-input"]} placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                <input className={classes["register-input"]} placeholder="Password" type="password" onChange={(e) => setPassWord(e.target.value)} required />
                <input className={classes["register-input"]} placeholder="Phone" type="number" onChange={(e) => setPhone(e.target.value)} required />

                <button className={classes["register-button"]} type="submit" >Sign Up</button>
            </form >
            <div className={classes["login-link"]}>
                Login? <button onClick={() => navigate('/login')}>Click</button>
            </div>
        </div >
    );
}

export default RegisterPage;
