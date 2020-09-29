import React, { Component } from 'react';
import TBHeader from "./components/TBHeader.js";
import SelectProgram from "./components/SelectProgram.js";
import SelectMode from "./components/SelectMode.js";
import SelectTime from "./components/SelectTime.js";
import SelectPeople from "./components/SelectPeople.js";
import Geoloc from "./components/geolocation.js";
export class Book extends Component {
    state = {
        mode: "",
        program:"",
        people: "",
        timeSlot: "",
        step: 1,
    }
    modeChange = e=>{this.setState({mode: e.target.value})}
    genderChange = e=>{this.setState({gender: e.target.value})}
    programChange = e=>{this.setState({program: e.target.value})}
    peopleChange = e=>{this.setState({people: e.target.value})}
    timeSlotChange = e=>{this.setState({timeSlot: e.target.value})}
    stepAhead =  ()=>{
        this.setState({
            step:this.state.step+1
        })
    }
    stepBack =  ()=>{
        this.setState({
            step:this.state.step-1
        })
    }

    render() {
        console.log(this.state.timeSlot)
        const {step} = this.state;
        switch(step){
        case 1:
        return (
            <div>
            <TBHeader/>
            <Geoloc/>
            </div>
         )  
        case 2:
        return (
            <div>
            <TBHeader/>    
            <SelectMode 
            stepAhead={this.stepAhead} 
            stepBack={this.stepBack} 
            mode={this.state.mode}
            modeChange={this.modeChange}
            />
            </div>
         )  
         case 3:
            return (
                <div>
                <TBHeader/>    
                <SelectTime fromBook={0} stepAhead={this.stepAhead} stepBack={this.stepBack}
                timeSlot={this.state.timeSlot}
                timeSlotChange={this.timeSlotChange}/>
                </div>
             )  
        case 4:
            return (
                <div>
                <TBHeader/>    
                <SelectPeople 
                stepAhead={this.stepAhead} 
                stepBack={this.stepBack} 
                people={this.state.people}
                peopleChange={this.peopleChange}/>
                </div>
                )           
    }
}
}

export default Book
