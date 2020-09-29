import React from 'react'
import Header from "./components/Header.js";
import BookTab from "./components/BookTab.js";
import "./Customer.css";
function Customer () {
    return (
        <React.Fragment>
            <div className="customer">
                    <Header/>
            </div>
            <BookTab/>
        </React.Fragment>   
    )
}
export default Customer;

