import React, { Component } from 'react'
import "./HomeClasses.css";
import ClassesLogo1 from "../img/classes/1.jpg";
import ClassesLogo2 from "../img/classes/2.jpg";
import ClassesLogo3 from "../img/classes/3.jpg";

export class HomeClasses extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            windowWidth: window.innerWidth,   
        };
      }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    } 

    render() {
        const { windowWidth } = this.state;
        console.log(windowWidth);
    if (windowWidth >= 1000){
            return (
                <section className="classes-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Popular Classes</h2>
                        <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                    <div class="classes-item">
                        <div class="ci-img">
                            <img src={ClassesLogo1} alt=""/>
                        </div>
                        <div class="ci-text">
                            <h4>Weight Loss</h4>
                            <p>We customized our session to meet your basic requirement & our end goal</p>
                        </div>
                    </div>   
                    </div>
                    <div className="col-md-4">
                    <div class="classes-item">
                        <div class="ci-img">
                            <img src={ClassesLogo2} alt=""/>
                        </div>
                        <div class="ci-text">
                            <h4>Strengthening & Muscle Building</h4>
                            <p>We understand your innate desire to attain excellence.Curate program with best in class trainer</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="classes-item" >
                        <div class="ci-img">
                            <img src={ClassesLogo3} alt=""/>
                        </div>
                        <div class="ci-text">
                            <h4>Relaxation & Meditation</h4>
                            <p>When you cannot go outside you go within.Mental health is highly important to achieve peace in life</p>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        </section>
            )
    }
    else {
        return (
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <div class="classes-item" >
                            <div class="ci-img">
                                <img src={ClassesLogo3} alt=""/>
                            </div>
                            <div class="ci-text">
                                <h4>Relaxation & Meditation</h4>
                                <p>When you cannot go outside you go within.Mental health is highly important to achieve peace in life</p>
                            </div>
                        </div>
                    </div>
                    <div class="item ">
                        <div class="classes-item">
                            <div class="ci-img">
                                <img src={ClassesLogo2} alt=""/>
                            </div>
                            <div class="ci-text">
                                <h4>Strengthening & Muscle Building</h4>
                                <p>We understand your innate desire to attain excellence.Curate program with best in class trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div class="classes-item">
                            <div class="ci-img">
                                <img src={ClassesLogo1} alt=""/>
                            </div>
                            <div class="ci-text">
                                <h4>Weight Loss</h4>
                                <p>We customized our session to meet your basic requirement & our end goal</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>    
        )    
    }
}
}

export default HomeClasses
