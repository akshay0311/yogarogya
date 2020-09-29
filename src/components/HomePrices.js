import React from 'react';
import "./HomePrices.css";
import {Link} from "react-router-dom";
function HomePrices() {
    return (
            <div>		
                <div class="section-title text-center">
				    <h2>Pricing plans</h2>
				    <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
			    </div>	
				<div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-sm-6">
					<div className="pricing-item begginer">
						<div class="pi-top">
							<h4>Weight  Loss  Programme</h4>
						</div>
						<div class="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to control weight</li>
                            </ul>   
                        </div>
						<button className="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
					</div>
				</div>
                    <div className="col-lg-3 col-sm-6">
					<div className="pricing-item entermediate">
						<div className="pi-top">
							<h4>Diabetes Control Programme</h4>
						</div>
						<div className="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className = "pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to control diabetes</li>
                            </ul>
                        </div>
                        <button className="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="pricing-item advanced">
						<div className="pi-top">
							<h4>Immunity Booster Programme</h4>
						</div>
						<div className="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to build immunity</li>
                            </ul>   
                        </div>
                        <button className="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
				    </div> 
                </div>       
				<div className="col-lg-3 col-sm-6">
					<div className="pricing-item professional">
						<div className="pi-top">
							<h4>Post Natal Programme</h4>
						</div>
						<div className="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to build immunity</li>
                            </ul>   
                        </div>
                        <button class="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
				    </div>
			    </div>
                    </div>
                </div>

		        <div className="container">
			        <div className="row">
				        <div className="col-lg-3 col-sm-6">
					        <div className="pricing-item professional">
						        <div className="pi-top">
							        <h4>Pre Natal Programme</h4>
						        </div>
						<div className="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to tone up Pelvic muscles</li>
                            </ul>   
                        </div>
                        <button class="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
					</div>	
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="pricing-item begginer">
						<div className="pi-top">
							<h4>Spine Strengthening Programme</h4>
						</div>
						<div className="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to strengthen your spine</li>
                            </ul>
                        </div>
                        <button class="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
					</div>	
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="pricing-item entermediate">
						<div className="pi-top">
							<h4>Pink Programme</h4>
						</div>
						<div className="pi-price">
							<h2>Rs 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to tone up Pelvic muscles</li>
                            </ul>   
                        </div>
                        <button class="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>
					</div>	
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="pricing-item advanced">
						<div className="pi-top">
							<h4>Relaxation Programme</h4>
						</div>
						<div className="pi-price">
							<h2>Rs. 5100</h2>
							<p>12 Sessions Plan</p>
						</div>
						<div className="pricing-item-bottom">
                            <ul>
                                <li><b>Validity For 45 days</b></li>
                                <li>Carefully designed modules for practicing a set of Asanas to relax your mind & soul</li>
                            </ul>   
                        </div>
                        <button class="site-btn sb-line-gradient"><Link className="link" to="/book">Get Started</Link></button>	
				    </div>
			    </div>
            </div>
            </div>
        </div>
    
    )
}

export default HomePrices;
