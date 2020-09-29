import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import "./LoginInput.css";
import HeaderLogo from "../img/yoga.png";
function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login_image" src={HeaderLogo}/>
            </Link>
            <div className="login_container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="text" 
                        />
                        <h5>Password</h5>
                        <input
                        type="password"
                        />
                        <button type="submit" className="login_signin">Sign in</button>
                    </form>
                    <p>
                        By signing in you agree to Yoggarogya terms and conditions
                    </p>
                    <button className="login_register">
                        <Link className="login_registerLink" to = "/signup">Create your yogarogya account</Link>
                    </button>
            </div>
        </div>
    )
}

export default Login;

