import React from 'react'
import  "./HomeHero.css";
import imgHero1 from "../img/hero-slider/1.png";
function HomeHero() {
    return (
        <section class="hero-section">
		<div class="hero-social-warp">
			<div class="hero-social">
				<a href="https://www.facebook.com/yogarogya.in/">
				<i class="fa fa-facebook"></i></a>
				<a href=" https://www.instagram.com/invites/contact/?i=5xslmh3t91mu&utm_content=i4jz3n7">
				<i class="fa fa-instagram"></i></a>
			</div>
		</div>
		<div class="hero-slider owl-carousel">
			<div class="hs-item">
				<div class="hs-style-1 text-center">
					<img src={imgHero1} alt=""/>
				</div>
			</div>
        </div>
    </section>        
    )
}

export default HomeHero;
