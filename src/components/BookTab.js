import React from 'react';
import BookCard from "./BookCard.js";
import Grid from '@material-ui/core/Grid';
import "./BookTab.css"
class BookingTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        }
    }

    handleCurrentBooking = ()=>{
         if (this.state.step == 2)
            this.setState({
                step : this.state.step-1  
            })
    }
    
    handleBookingHistory = ()=>{
        if (this.state.step == 1)
           this.setState({
            step : this.state.step+1  
           })
    }       

    render(){
        const {step} = this.state;
        switch(step){
            case 1:
                return (
                    <div className="bookTab">
                          <button className="bookTab_currentButton" onClick={this.handleCurrentBooking}>Current Booking</button>
                          <button className="bookTab_historyButton" onClick= {this.handleBookingHistory}>Booking History</button>
                          <br/>
                          <BookCard flag = {1}/>
                    </div>
                )
            case 2:
                return (
                    <div className="bookTab">
                        <button className="bookTab_currentButton" onClick={this.handleCurrentBooking}>Current Booking</button>
                        <button className="bookTab_historyButton" onClick= {this.handleBookingHistory}>Booking History</button>
                        <BookCard flag = {0}/>
                    </div>
                )    
        }
    }
   
}

export default BookingTab
