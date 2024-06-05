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
          console.log(response.data);
          // Call onLoginSuccess function to set isLoggedIn state to true
          onLoginSuccess();
        } catch (error) {
          console.error('Error signing in:', error);
        }
      };


    const handleSignUp = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await axios.post('http://localhost:4040/signup', formData);
            console.log(response.data);
            // Call onLoginSuccess function to set isLoggedIn state to true
            onLoginSuccess();
            // Reload the page to trigger rendering of List and Chat components
            window.location.reload();
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="login">
            <div className="item">
                <h2>welcome back</h2>
                <form onSubmit={handleSignIn}>
                    <input type="text" placeholder='email' name='user' />
                    <input type="password" placeholder='password' name='pass' />
                    <button type="submit">sign in </button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
                <h2>create an Account</h2>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="file">
                        <img src={avatar.url || "/src/assests/avatar.jpg"} alt="" />
                        upload an image
                    </label>
                    <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder='username' name='user' />
                    <input type="text" placeholder='email' name='email' />
                    <input type="password" placeholder='password' name='pass' />
                    <button type="submit">sign up </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
