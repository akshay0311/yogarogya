import React from 'react'
import "./AboutBody.css";
import bgImg from "../img/page-top-bg.jpg";
function AboutBody() {
    return (
        <section class="page-top-section set-bg" data-setbg={bgImg}>
		<div class="container">
			<div class="row">
				<div class="col-12 text-white">
					<h2 class="mt-md-5">About</h2>
					<br/>
					<p>Yogarogya is a premier platform of Trainers and Healers for Yoga and Meditation based healing services.</p>
				<p>Yogarogya is building a strong commmunity of best in class trainers, who could serve society to achieve wellness 
					into all realms of a healthy lifestyle, with an aim to bring back age old tradition in an urban living environment.
					It will work as a bridge that will simply connect trainer to an end user.
				</p>
				<br/>
				<p><b>The Enabler:</b> Yogaorgya has designed unique technology platform, to make this possible.</p>
				<p><b>Core Features:</b> To give personalized fitness experiences to our customers, with core values.</p>
				<p><b>Build:</b> Deep customer understanding is our first principle and fitness experience seamless by constantly working on new solution.</p> 
				</div>
			</div>
		</div>
	</section>
    )
}

export default AboutBody
