import React, {useState} from 'react'
import WeightLoss from "../img/obesity.png";
import Diabetes from "../img/diabetes.png";
import Immunity from "../img/immunity.png";
import PostNatal from "../img/post.png";
import PreNatal from "../img/pre.png";
import Spine from "../img/spine.png";
import Pink from "../img/pink.png";
import Relaxation from "../img/meditation.jpg";
import Trainer from "../img/trainer.png";
import Grid from '@material-ui/core/Grid';
import "./SelectProgram.css";
import imgHero1 from "../img/hero-slider/1.png";

function SelectProgram({stepBack,stepAhead,program,programChange}) { 
    function moveAhead(){
        if (program == "weight loss" || program == "diabetes control" || program == "immunity booster" 
        || program == "post natal" || program == "pre natal" || program == "spine strengthening" || program == "pink" || 
        program == "relaxation"|| program == "ask trainer") 
        stepAhead()
        else alert("Please any one of the option")    
    }
    return (     
        <div className = "program_container">
            <img className="trial_image" src={imgHero1}/>
            <div className="wrapper">
                <h2 className="optionsHeader">Choose One</h2>
                <Grid container spacing={7}> 
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="weight loss" 
                        id="weight loss" 
                        checked={program === "weight loss"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="weight loss">   
                            <img src= {WeightLoss}/>
                            <br/>
                            <h4>Weight Loss Programme</h4>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="diabetes control" 
                        id="diabetes control" 
                        checked={program === "diabetes control"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="diabetes control">   
                            <img src= {Diabetes}/>
                            <br/>
                            <h4>Diabetes Control Programme</h4>
                        </label>
                    </Grid>   
                </Grid>
                <Grid container spacing={7}> 
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="immunity booster" 
                        id="immunity booster" 
                        checked={program == "immunity booster"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="immunity booster">   
                            <img src= {Immunity}/>
                            <br/>
                            <h4>Immunity Booster Programme</h4>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="post natal" 
                        id="post natal" 
                        checked={program == "post natal"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="post natal">   
                            <img src= {PostNatal}/>
                            <br/>
                            <h4>Post Natal Programme</h4>
                        </label>
                    </Grid>   
                </Grid>
                <Grid container spacing={7}> 
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="pre natal" 
                        id="pre natal" 
                        checked={program == "pre natal"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="pre natal">   
                            <img src= {PreNatal}/>
                            <br/>
                            <h4>Pre Natal Programme</h4>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="spine strengthening" 
                        id="spine strengthening" 
                        checked={program == "spine strengthening"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="spine strengthening">   
                            <img src= {Spine}/>
                            <br/>
                            <h4>Spine Strengthening Programme</h4>
                        </label>
                    </Grid> 
                </Grid>      
                <Grid container spacing={7}> 
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="pink" 
                        id="pink" 
                        checked={program == "pink"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="pink">   
                            <img src= {Pink}/>
                            <br/>
                            <h4>Pink Programme</h4>
                        </label>  
                    </Grid>
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="relaxation" 
                        id="relaxation" 
                        checked={program == "relaxation"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="relaxation">   
                            <img src= {Relaxation}/>
                            <br/>
                            <h4>Relaxation & Meditation Programme</h4>
                        </label>
                    </Grid>  
                </Grid> 
                <Grid container spacing={7}>
                    <Grid item xs={6}>
                        <input 
                        type="radio" 
                        name="program" 
                        value="ask trainer" 
                        id="trainer" 
                        checked={program == "ask trainer"}
                        onChange={programChange}
                        className="input-hidden" />
                        <label for="trainer">   
                            <img src= {Trainer}/>
                            <br/>
                            <h4>Ask Trainer</h4>
                        </label>
                    </Grid>
                </Grid>      
                <br/>
                <button className="prevButton"  onClick={stepBack}>Previous</button>
                <button className="nextButton" onClick={moveAhead}>Next</button>  
            </div>
        </div>
    )
}

export default SelectProgram
