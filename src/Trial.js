import React, { Component } from 'react'
import SignupInput from "./components/SignupInput.js";
import TBHeader from "./components/TBHeader.js";
import SelectMode from "./components/SelectMode.js";
import SelectGender from "./components/SelectGender.js";
import SelectProgram from "./components/SelectProgram.js";
import SelectPeople from "./components/SelectPeople.js";
import SelectFrequency from "./components/SelectFrequency.js";
import SelectTime from "./components/SelectTime.js";

export class Trial extends Component {
    state = {
        mode: "",
        gender: "",
        program:"",
        people: "",
        frequency: "",
        time1 : "",
        time2 : "",
        step: 1,
    }
    stepAhead =  ()=>{
        this.setState({step:this.state.step+1})
    }
    stepBack =  ()=>{
        this.setState({step:this.state.step-1})
    }
    modeChange = e=>{this.setState({mode: e.target.value})}
    genderChange = e=>{this.setState({gender: e.target.value})}
    programChange = e=>{this.setState({program: e.target.value})}
    peopleChange = e=>{this.setState({people: e.target.value})}
    frequencyChange = e=>{this.setState({frequency: e.target.value})}
    time1Change = e=>{this.setState({time1: e.target.value})}
    time2Change = e=>{this.setState({time2: e.target.value})}
    render() {
        console.log(this.state)
        const {step} = this.state;
        switch(step){
        case 1:
            return (
                <div>
                    <SignupInput nextStep = {this.stepAhead}/>
                </div>
            )
        case 2:
            return (
                <div>
                    <TBHeader/>
                    <SelectMode stepAhead={this.stepAhead} stepBack={this.stepBack} 
                    mode= {this.state.mode}
                    modeChange={this.modeChange}/>
                </div>
            )  
        case 3:
            return (
                <div>
                    <TBHeader/>
                    <SelectGender stepAhead={this.stepAhead} stepBack={this.stepBack} 
                    gender={this.state.gender}
                    genderChange={this.genderChange}/>
                </div>
            )  
        case 4:
             return (
                <div>
                <TBHeader/>   
                <br/>
                <SelectProgram stepAhead={this.stepAhead} stepBack={this.stepBack}
                program = {this.state.program} 
                programChange={this.programChange}/>
                </div>
             )  
        case 5:     
            return (
                <div>
                    <TBHeader/>
                    <SelectPeople stepAhead={this.stepAhead} stepBack={this.stepBack} 
                    people={this.state.people}
                    peopleChange={this.peopleChange}/>
                </div>
            )  
        case 6:     
            return (
                <div>
                    <TBHeader/>
                    <SelectFrequency stepAhead={this.stepAhead} stepBack={this.stepBack} 
                    frequency={this.state.frequency}
                    frequencyChange={this.frequencyChange}/>
                </div>
            )  
        case 7:     
            return (
                <div>
                    <TBHeader/>
                    <SelectTime 
                    fromBook={1}
                    time1 = {this.state.time1}
                    time2 = {this.state.time2}
                    time1Change = {this.time1Change}
                    time2Change = {this.time2Change}
                    stepAhead={this.stepAhead} stepBack={this.stepBack} 
                    />
                </div>
            )        
    }
    
}
}

export default Trial;