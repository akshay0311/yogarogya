import React from 'react'
import SignupInput from "./components/SignupInput.js";
import {Link} from 'react-router-dom';
import HeaderLogo from "./img/yoga.png";
export default function Signup({pos}) {
    const LogoStyle = {
        width : "130px",
        objectFit: "contain",
        marginTop: "20px",
        marginBottom: "5px",
    }
    const signupStyle = {
        background:"white",
        alignItems:"center",
        display:"flex",
        flexDirection: "column"
    }
    return (
        <div style={signupStyle}>
            <Link to="/">
                <img style={LogoStyle} src={HeaderLogo}/>
            </Link>
            <SignupInput pos={pos}/>
        </div>
    )
}
