import React from 'react';
import "./HomeAbout.css";
import aboutImg from "../img/about.png";
import about1Icon from "../img/icons/about-1.png";
import about2Icon from "../img/icons/about-2.png";
import about3Icon from "../img/icons/about-2.png";

function HomeAbout() {
    return (
        <div className="homeAbout">
	        <section className="about-section spad">
		    <div className="container">
                <div className="section-title text-center">
                    <h2>Welcome to Yogarogya</h2>
                    <p>Practice Yoga to perfect physical beauty, take care of your soul,increase your immunity and enjoy life more fully!</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={aboutImg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-item">
                            <div className="ai-icon">
                            <img src={about1Icon} alt=""/>
                            </div>
                            <div className="ai-text">
                                <h4>Weight Loss Programme</h4>
                                <p>We have programme customized to as per indiviual's health ailment & goal.</p>
                            </div>
                        </div>
                        <div className="about-item">
                            <div className="ai-icon">
                                <img src={about2Icon} alt=""/>
                            </div>
                            <div className="ai-text">
                                <h4>Strengthening & Muscle Building</h4>
                                <p>We will help you achieve mobility and flexibility with our well designed session</p>
                            </div>
                        </div>
                        <div className="about-item">
                            <div className="ai-icon">
                                <img src={about3Icon} alt=""/>
                            </div>
                            <div className="ai-text">
                                <h4>Relaxation & Meditation</h4>
                                <p >Balancing between mind & body with our best of the training programme</p>
                            </div>
                        </div>
                    </div>
			    </div>
		    </div>
            </section>  
        </div>
    )
}

export default HomeAbout
