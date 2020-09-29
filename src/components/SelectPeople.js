import React, {useState} from 'react'
import Single from "../img/single.png";
import Couple from "../img/couple.png";
import Group from "../img/group.png";
import "./SelectMode.css";
import Grid from '@material-ui/core/Grid';
import imgHero1 from "../img/hero-slider/1.png";
function SelectPeople({stepBack,stepAhead,people,peopleChange}) {
    function moveAhead(){
        if (people == "single" || people == "couple" || people == "group") stepAhead()
        else alert("Please any one of the option")    
    }
    return (     
        <div className = "container container2">
            <img className="trial_image" src={imgHero1}/>
            <div className=" wrapper">
                <h2 className="optionsHeader">Choose One</h2>
                <Grid container spacing={7}> 
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="people" 
                        value="single" 
                        id="single" 
                        checked={people == "single"}
                        onChange={peopleChange}
                        className="input-hidden" />
                        <label for="single">   
                            <img src= {Single}/>
                            <br/>
                            <h4>Single</h4>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                    <input 
                        type="radio" 
                        name="people" 
                        value="couple" 
                        id="couple" 
                        checked={people == "couple"}
                        onChange={peopleChange}
                        className="input-hidden" />
                        <label for="couple">   
                            <img src= {Couple}/>
                            <br/>
                            <h4>Couple</h4>
                        </label>
                    </Grid>   
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="people" 
                        value="group" 
                        id="group" 
                        checked={people == "group"}
                        onChange={peopleChange}
                        className="input-hidden" />
                        <label for="group">   
                            <img src= {Group}/>
                            <br/>
                            <h4>Group</h4>
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
