import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ''
    });

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            const response = await axios.post('http://localhost:4040/', formData);
            if (response.data.success)
                if (response.data.success) {
                    console.log("Login successful");
                    onLoginSuccess(); // Trigger the parent component's login success handler
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error('Error signing in:', error);
            }
        };
        
    
        const handleSignUp = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
    
            try {
                const signUpUrl = 'http://localhost:4040/signup';
                const response = await axios.post(signUpUrl, formData);
                if (response.data.success) {
                    console.log("Signup successful");
                    onLoginSuccess();
                    window.location.reload(); // Reload the page after signup
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error('Error signing up:', error);
            }
        };
    
        return (
            <div className="login">
                <div className="item">
                    <h2>Welcome Back</h2>
                    <form onSubmit={handleSignIn}>
                        <input type="text" placeholder="username" name="user" required />
                        <input type="password" placeholder="password" name="pass" required />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="separator"></div>
                <div className="item">
                    <h2>Create an Account</h2>
                    <form onSubmit={handleSignUp}>
                        <label htmlFor="file">
                            <img src={avatar.url || "/src/assets/avatar.jpg"} alt="avatar" />
                            Upload an image
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} required />
                        <input type="text" placeholder="username" name="user" required />
                        <input type="email" placeholder="email" name="email" required />
                        <input type="password" placeholder="password" name="pass" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    };
    
    export default Login;
    
