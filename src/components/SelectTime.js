import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import "./SelectMode.css";
import imgHero1 from "../img/hero-slider/1.png";
function SelectTime({stepAhead,stepBack,fromBook,time1,time2,timeSlot,timeSlotChange,time1Change,time2Change}) {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    function Tomorrow () {
        var d = new Date();
        return d.getDate(d.setDate(d.getDate()+1));
    }
    function twoDaysFromToday() {
        var d = new Date();
        return d.getDate(d.setDate(d.getDate()+2));
    }
    function threeDaysFromToday() {
        var d = new Date();
        return d.getDate(d.setDate(d.getDate()+3));
    }
    function Day() {
        var d = new Date();
        var da= new Array()
        da.push(days[(d.getDay()+1)%7])
        da.push(days[(d.getDay()+2)%7])
        return da;
    }


    if (fromBook){
       return (
        <div className="container container2">
            <img className="trial_image" src={imgHero1}/>
           <div className="wrapper">
                <h5>When would you like your first session?</h5>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <input type="radio" name="time1" value={Tomorrow()} id="tomorrow" 
                        checked={time1 == Tomorrow()} onChange={time1Change}
                        className="input-hidden" />
                        <label for="tomorrow">   
                            <div className="time_tile" elevation={3}>
                                <h5>Tomorrow</h5>
                                <h6>{Tomorrow()}</h6>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={4}>
                        <input type="radio" name="time1" value={twoDaysFromToday()} id="two" 
                        checked={time1 == twoDaysFromToday()} onChange={time1Change}
                        className="input-hidden" />
                        <label for="two">   
                            <div className="time_tile" elevation={3}>
                                <h5>{Day()[0]}</h5>
                                <h6>{twoDaysFromToday()}</h6>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={4}>
                        <input type="radio" name="time1" value={threeDaysFromToday()} id="three" 
                        checked={time1 == threeDaysFromToday()} onChange={time1Change}
                        className="input-hidden" />
                        <label for="three">   
                            <div className="time_tile" elevation={3}>
                                <h5>{Day()[1]}</h5>
                                <h6>{threeDaysFromToday()}</h6>
                            </div>
                        </label>
                    </Grid>
                </Grid> 
                <br/>
                <br/>
                <br/>
                <h5>Pick you time</h5>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="5 am"  id = "5 am"
                        checked={time2 == "5 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for = "5 am">   
                            <div className="time_tile">
                                <h4>5</h4>
                                <h5>am</h5>
                            </div>
                        </label> 
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="6 am" id="6 am" 
                        checked={time2 === "6 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="6 am">   
                            <div className="time_tile">
                                <h4>6</h4>
                                <h5>am</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="7 am" id="7 am" 
                        checked={time2 === "7 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="7 am">   
                            <div className="time_tile">
                                <h4>7</h4>
                                <h5>am</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="8 am" id="8 am" 
                        checked={time2 === "8 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="8 am">   
                            <div className="time_tile">
                                <h4>8</h4>
                                <h5>am</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="9 am" id="9 am" 
                        checked={time2 === "9 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="9 am">   
                            <div className="time_tile">
                                <h4>9</h4>
                                <h5>am</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="10 am" id="10 am" 
                        checked={time2 === "10 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="10 am">   
                            <div className="time_tile">
                                <h4>10</h4>
                                <h5>am</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="11 am" id="11 am" 
                        checked={time2 === "11 am"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="11 am">   
                            <div className="time_tile">
                                <h4>11</h4>
                                <h5>am</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="12 pm" id="12 pm" 
                        checked={time2 === "12 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="12 pm">   
                            <div className="time_tile">
                                <h4>12</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="1 pm" id="1 pm" 
                        checked={time2 === "1 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="1 pm">   
                            <div className="time_tile">
                                <h4>1</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="2 pm" id="2 pm" 
                        checked={time2 === "2 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="2 pm">   
                            <div className="time_tile">
                                <h4>2</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="3 pm" id="3 pm" 
                        checked={time2 === "3 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="3 pm">   
                            <div className="time_tile">
                                <h4>3</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="4 pm" id="4 pm" 
                        checked={time2 === "4 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="4 pm">   
                            <div className="time_tile">
                                <h4>4</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="5 pm" id="5 pm" 
                        checked={time2 === "5 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="5 pm">   
                            <div className="time_tile">
                                <h4>5</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="6 pm" id="6 pm" 
                        checked={time2 === "6 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="6 pm">   
                            <div className="time_tile">
                                <h4>6</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="7 pm" id="7 pm" 
                        checked={time2 === "7 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="7 pm">   
                            <div className="time_tile">
                                <h4>7</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="8 pm" id="8 pm" 
                        checked={time2 === "8 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="8 pm">   
                            <div className="time_tile">
                                <h4>8</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="9 pm" id="9 pm" 
                        checked={time2 === "9 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="9 pm">   
                            <div className="time_tile">
                                <h4>9</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="radio" name="time2" value="10 pm" id="10 pm" 
                        checked={time2 === "10 pm"} onChange={time2Change}
                        className="input-hidden" />
                        <label for="10 pm">   
                            <div className="time_tile">
                                <h4>10</h4>
                                <h5>pm</h5>
                            </div>
                        </label>
                    </Grid>
                </Grid> 
                <br/>
                <button className="prevButton" onClick={stepBack}>Previous</button>
                <button className="nextButton" onClick={stepAhead}>Next</button>
           </div>
        </div>
    )
    }
    else {
        {/*Layout for booking page*/}
            return (
                <div className="container container2">
                    <img className="trial_image" src={imgHero1}/>
                    <div className="wrapper">
                        <h4>Peak Hours</h4>
                        <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <input type="radio" name="timeSlot" value="5 am"  id = "5 am"
                                    checked={timeSlot == "5 am"} onChange={timeSlotChange}
                                    className="input-hidden" />
                                    <label for = "5 am">   
                                        <div className="time_tile">
                                            <h4>5</h4>
                                            <h5>am</h5>
                                        </div>
                                    </label> 
                                </Grid>
                            <Grid item xs={3}>
                            <input type="radio" name="timeSlot" value="6 am"  id = "6 am"
                                checked={timeSlot == "6 am"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "6 am">   
                                    <div className="time_tile">
                                        <h4>6</h4>
                                        <h5>am</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="7 am"  id = "7 am"
                                checked={timeSlot == "7 am"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "7 am">   
                                    <div className="time_tile">
                                        <h4>7</h4>
                                        <h5>am</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="8 am"  id = "8 am"
                                checked={timeSlot == "8 am"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "8 am">   
                                    <div className="time_tile">
                                        <h4>8</h4>
                                        <h5>am</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="9 am"  id = "9 am"
                                checked={timeSlot == "9 am"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "9 am">   
                                    <div className="time_tile">
                                        <h4>9</h4>
                                        <h5>am</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="5 pm"  id = "5 pm"
                                checked={timeSlot == "5 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "5 pm">   
                                    <div className="time_tile">
                                        <h4>5</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="6 pm"  id = "6 pm"
                                checked={timeSlot == "6 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "6 pm">   
                                    <div className="time_tile">
                                        <h4>6</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="7 pm"  id = "7 pm"
                                checked={timeSlot == "7 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "7 pm">   
                                    <div className="time_tile">
                                        <h4>7</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="8 pm"  id = "8 pm"
                                checked={timeSlot == "8 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "8 pm">   
                                    <div className="time_tile">
                                        <h4>8</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                            <input type="radio" name="time2" value="9 pm"  id = "9 pm"
                                    checked={timeSlot == "9 pm"} onChange={timeSlotChange}
                                    className="input-hidden" />
                                    <label for = "9 pm">   
                                        <div className="time_tile">
                                            <h4>9</h4>
                                            <h5>pm</h5>
                                        </div>
                                    </label> 
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <h4>Non-Peak Hours</h4>
                        <Grid container spacing = {2}>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="10 am"  id = "10 am"
                                checked={timeSlot == "10 am"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "10 am">   
                                    <div className="time_tile">
                                        <h4>10</h4>
                                        <h5>am</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="11 am"  id = "11 am"
                                checked={timeSlot == "11 am"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "11 am">   
                                    <div className="time_tile">
                                        <h4>11</h4>
                                        <h5>am</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="12 pm"  id = "12 pm"
                                checked={timeSlot == "12 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "12 pm">   
                                    <div className="time_tile">
                                        <h4>12</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="1 pm"  id = "1 pm"
                                checked={timeSlot == "1 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "1 pm">   
                                    <div className="time_tile">
                                        <h4>1</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="2 pm"  id = "2 pm"
                                checked={timeSlot == "2 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "2 pm">   
                                    <div className="time_tile">
                                        <h4>2</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="3 pm"  id = "3 pm"
                                checked={timeSlot == "3 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "3 pm">   
                                    <div className="time_tile">
                                        <h4>3</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="4 pm"  id = "4 pm"
                                checked={timeSlot == "4 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "4 pm">   
                                    <div className="time_tile">
                                        <h4>4</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                            <Grid item xs={3}>
                                <input type="radio" name="time2" value="10 pm"  id = "10 pm"
                                checked={timeSlot == "10 pm"} onChange={timeSlotChange}
                                className="input-hidden" />
                                <label for = "10 pm">   
                                    <div className="time_tile">
                                        <h4>10</h4>
                                        <h5>pm</h5>
                                    </div>
                                </label> 
                            </Grid>
                        </Grid>
                        <br/>
                        <button className="prevButton" onClick={stepBack}>Previous</button>
                        <button className="nextButton" onClick={stepAhead}>Next</button>
                    </div>
                </div>   
            )      
    }
}

export default SelectTime
