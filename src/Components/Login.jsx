import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./Login.css";

const Login = (props) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser((prevValue) => {
            console.log(prevValue);
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/login', user, {withCredentials: true})
        .then((data) => {
            if(data.status == 200){
                props.closeLogin();
                props.handleLoginPage();
            }
            else if(data.status == 401){
                console.log("Please enter correct password!");
                alert("Please enter correct password!");
            }
            else if(data.status == 400){
                console.log("Try signing in first!");
                alert("Try signing in first!");
            }
            console.log(data)
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])
    return ReactDOM.createPortal(
        <div>
            <div className="login-wrapper" onClick={() => props.closeLogin()}></div>
            <div className="login-form">
                <div className="login-form-top">
                    <h2>Log In</h2>
                    <div className="exit-btn" type="button" onClick={() => props.closeLogin()}><span class="material-symbols-outlined">cancel</span></div>
                </div>
                <p>
                    By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
                </p>
                <div className="oauth-btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <p>Continue with Google</p>
                    <div></div>
                </div>
                <div className="divider">
                    <hr className="divider-rule"/>
                    <p>or</p>
                    <hr className="divider-rule"/>
                </div>
                <form className="login-form-container">
                    <input onChange={handleChange} className="login-form-input" type="email" name="username" placeholder="username">

                    </input>
                    <input onChange={handleChange} className="login-form-input" type="password" name="password" placeholder="password">

                    </input>
                    <div className="form-change-text">
                        <p>New to reddit? </p>
                        <a href="#">Sign up</a>
                    </div>
                    <div onClick={handleLogin} className="submit-btn" type="button">
                       Log in
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
        , document.querySelector(".login-portal"))
}

export default Login;