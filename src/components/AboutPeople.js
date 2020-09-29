import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./AboutPeople.css";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
   style : {
        width:theme.spacing(15),
        height:theme.spacing(15)
    }
}));
function AboutPeople() {
    const classes = useStyles();
    return (
       <div className="aboutPeople">
           <h1>Our Founding Team</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 aboutPeople_content">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.style}/>  
                        <h4>Dharmendra Yadav</h4>
                        <h3>(Co-Founder)</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Aliquet nibh praesent tristique magna sit amet purus gravida quis. 
                            Mauris augue neque gravida in fermentum et sollicitudin. 
                            Quam quisque id diam vel quam elementum pulvinar etiam.
                        </p>
                    </div> 
                    <div className="col-md-3 aboutPeople_content">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.style} />  
                        <h4>Dharmendra Yadav</h4>
                        <h3>(Co-Founder)</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Aliquet nibh praesent tristique magna sit amet purus gravida quis. 
                            Mauris augue neque gravida in fermentum et sollicitudin. 
                            Quam quisque id diam vel quam elementum pulvinar etiam.
                        </p>
                    </div> 
                    <div className="col-md-3 aboutPeople_content">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.style} /> 
                        <h4>Dharmendra Yadav</h4>
                        <h3>(Co-Founder)</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Aliquet nibh praesent tristique magna sit amet purus gravida quis. 
                            Mauris augue neque gravida in fermentum et sollicitudin. 
                            Quam quisque id diam vel quam elementum pulvinar etiam.
                        </p> 
                    </div> 
                    <div className="col-md-3 aboutPeople_content">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.style} />  
                        <h4>Dharmendra Yadav</h4>
                        <h3>(Co-Founder)</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Aliquet nibh praesent tristique magna sit amet purus gravida quis. 
                            Mauris augue neque gravida in fermentum et sollicitudin. 
                            Quam quisque id diam vel quam elementum pulvinar etiam.
                        </p>
                    </div>   
                </div>   
            </div>
       </div>
    )
}

 export default AboutPeople;
