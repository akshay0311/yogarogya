import React from 'react'
import HomeHeader from "./components/HomeHeader.js";
import HomeAbout from "./components/HomeAbout.js";
import HomePrices from "./components/HomePrices.js";
import HomeFooter from "./components/HomeFooter.js";
import HomeHero from "./components/HomeHero.js";
import HomeClasses from "./components/HomeClasses.js";
function Home() {
    return (
        <div>
            <HomeHeader/>
            <HomeHero/>
            <HomeAbout/>
            <HomeClasses/>
            <HomePrices/>
            <HomeFooter/>

        </div>
    )
}

export default Home;
