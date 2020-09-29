import React from 'react'
import HomeHeader from "./components/HomeHeader.js";
import AboutBody from "./components/AboutBody.js";
import AboutPeople from "./components/AboutPeople.js";
import HomeFooter from "./components/HomeFooter.js";
function About() {
    return (
        <div>
            <HomeHeader/>
            <AboutBody/>
            <AboutPeople/>
            <HomeFooter/>
        </div>
    )
}

export default About
