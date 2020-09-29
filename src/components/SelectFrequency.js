import React, {useState} from 'react'
import Daily from "../img/daily.png";
import Thrice from "../img/thrice.png";
import Trainer from "../img/trainer.png";
import Grid from '@material-ui/core/Grid';
import "./SelectMode.css";
import imgHero1 from "../img/hero-slider/1.png";

function SelectPeople({stepBack,stepAhead,frequency,frequencyChange}) {
    function moveAhead(){
        if (frequency == "daily" || frequency == "thrice" || frequency=="trainer") stepAhead()
        else alert("Please any one of the option")    
    }
    return (     
        <div className = "container container2">
            <img className="trial_image" src={imgHero1}/>
            <div className="wrapper">
                <h2 className="optionsHeader">Choose One</h2>
                <Grid container spacing={2}> 
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="frequency" 
                        value="daily" 
                        id="daily" 
                        checked={frequency == "daily"}
                        onChange={frequencyChange}
                        className="input-hidden" />
                        <label for="daily">   
                            <img src= {Daily}/>
                            <br/>
                            <h4>Daily</h4>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="frequency" 
                        value="thrice" 
                        id="thrice" 
                        checked={frequency == "thrice"}
                        onChange={frequencyChange}
                        className="input-hidden" />
                        <label for="thrice">   
                            <img src= {Thrice}/>
                            <br/>
                            <h4>Three times a week</h4>
                        </label>
                    </Grid>    
                    <Grid item xs={6}> 
                        <input 
                        type="radio" 
                        name="frequency" 
                        value="trainer" 
                        id="trainer" 
                        checked={frequency == "trainer"}
                        onChange={frequencyChange}
                        className="input-hidden" />
                        <label for="trainer">   
                            <img src= {Trainer}/>
                            <br/>
                            <h4>Ask Trainer</h4>
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

export default SelectPeople
