import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import "./HomePrices.css";
export class BookCard extends Component {
    render() {
        const {flag} = this.props;
        if (flag == 1)
        return (
            <Grid container spacing={0}>
                <Grid item xs={12} sm={3}>
                    <div className="pricing-item entermediate">
                        <div className="pi-top">
                            <h4>Diabetes Control Programme</h4>
                        </div>    
                        <div className="pi-price">
                            <h2>Rs. 5100</h2>
                        </div>
                        <ul className="pricing">
                            <li><b>For sessions plan:</b>12</li>
                            <li><b>Validity For:</b>45</li>
                        </ul>
                    </div>    
                </Grid>
            </Grid>
        )
        else 
            return (
                <Grid container spacing={0}>
                <Grid item xs={12} sm={3}>
                    <div className="pricing-item entermediate">
                        <div className="pi-top">
                            <h4>Weight Loss Programme</h4>
                        </div>    
                        <div className="pi-price">   
                            <h2>Rs. 5100</h2>
                        </div>
                        <ul className="pricing">
                            <li><b>For sessions plan:</b>12</li>
                            <li><b>Validity For:</b>45</li>
                        </ul>
                    </div>    
                </Grid>
            </Grid>
            )
    }
}

export default BookCard
