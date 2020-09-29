import React from 'react'
import TopLogo from "../img/yog.png";

function TBHeader() {
    const myNavStyle = {
        position: "fixed", /* Set the navbar to fixed position */
        top: "0", /* Position the navbar at the top of the page */
        width: "100%", /* Full width */
        backgroundColor: "white"
      }
    const LogoStyle = {
        width: "90px",
        height: "90px",
        objectFit: "contain"
    }  

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
             <div style={myNavStyle}>
                <img style={LogoStyle} src={TopLogo}/>
            </div>     
        </div>
    )
}

export default TBHeader
