import React, {useState} from 'react'
import Male from "../img/male.jpg";
import Female from "../img/female.png";
import Grid from '@material-ui/core/Grid';
import imgHero1 from "../img/hero-slider/1.png";
import "./SelectMode.css";

function SelectMode({stepBack,stepAhead,gender,genderChange}) {
    function moveAhead(){
        if (gender == "male" || gender == "female") stepAhead()
        else alert("Please any one of the option")    
    }
    return (     
        <div className="container container1">
                <img className="trial_image" src= {imgHero1} />
                <div className="wrapper wrapper1">
                    <h2 className="optionsHeader">Choose One</h2>
                    <Grid container spacing={7}> 
                        <Grid item xs={6}>
                            <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            id="male" 
                            checked={gender === "male"}
                            onChange={genderChange}
                            className="input-hidden" />
                            <label for="male">   
                                <img src= {Male}/>
                                <br/>
                                <h4>Male</h4>
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            id="female" 
                            checked={gender === "female"}
                            onChange={genderChange}
                            className="input-hidden" />
                            <label for="female">
                                <img src={Female}/>
                                <br/>
                                <h4>Female</h4>
                            </label>
                        </Grid>  
                    </Grid>
                    <br/>
                    <button className="prevButton" onClick={stepBack}>Previous</button>
                    <button className="nextButton" onClick={moveAhead}>Next</button> 
                </div>
            </div> 
    )
}

export default SelectMode
