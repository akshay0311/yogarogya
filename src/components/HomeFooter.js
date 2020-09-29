import React from 'react'
import "./HomeFooter.css";
import yogarogyaLogo from "../img/yog.png";
function HomeFooter() {
    return (
	<footer className="footer-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="footer-widget">
						<div className="about-widget">
							<img className="footer_logo"src={yogarogyaLogo} alt="t"/>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="footer-widget">
						<div className="about-widget">
							<h2 className="fw-title">Contact Us:</h2>
							<ul>
								<li><i className="fa fa-phone"></i>9871892380, 9891010030</li>
									<li><i className="fa fa-envelope"></i>info@yogarogya.in</li>
								<li><i className="fa fa-map"></i>WZ-61 Todapur,New Delhi-110012</li>
							</ul>
						</div>
					</div>
				</div>
			</div>	
			
			<div className="footer-bottom">
				<div className="row">
					<div className="col-md-4">
						<div className="footer-social">
							<a href="https://www.facebook.com/yogarogya.in/">
							<i className="fa fa-facebook"></i></a>
							<a href=" https://www.instagram.com/invites/contact/?i=5xslmh3t91mu&utm_content=i4jz3n7">
							<i className="fa fa-instagram"></i></a>
						</div>
					</div>
			</div>
		</div>
        </div>
	</footer>
    )
}

export default HomeFooter;
