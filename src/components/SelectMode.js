import React, {useState} from 'react'
import OnLineImg from "../img/online.png";
import InPersonImg from "../img/in_person.png";
import Grid from '@material-ui/core/Grid';
import imgHero1 from "../img/hero-slider/1.png";
import "./SelectMode.css";

function SelectMode({stepBack,stepAhead,mode,modeChange}) {
    function moveAhead(){
        if (mode == "online" || mode == "in-person") stepAhead()
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
                            name="mode" 
                            value="online" 
                            id="online" 
                            checked={mode == "online"}
                            onChange={modeChange}
                            className="input-hidden" />
                            <label for="online">   
                                <img src= {OnLineImg}/>
                                <br/>
                                <h4>Online</h4>
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <input 
                            type="radio" 
                            name="mode" 
                            value="in-person" 
                            id="in-person" 
                            checked={mode == "in-person"}
                            onChange={modeChange}
                            className="input-hidden" />
                            <label for="in-person">
                                <img src={InPersonImg}/>
                                <br/>
                                <h4>In Person</h4>
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
