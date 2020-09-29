import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
  
class Geolocation extends Component {
    state = {
        lat: null,
        lng: null,
        zoom: 15
    }
    
    getCoordinates= ()=>{
        let lat,long;
         if ('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((p)=>{
                this.setState({lat:p.coords.latitude,lng:p.coords.longitude})
            })    
        }
    }

    render(){
        return (                
        <div style={{ height: '100vh', width: '70%' }}>
            <button onClick={this.getCoordinates}>Onclick</button>
            { this.state.lat && this.state.lng ?
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBqeD1eqrxVLrJDUF3r9rMS-U-leaCiKKw'}}
                defaultCenter={{
                   lat: this.state.lat,
                   lng: this.state.lng
                }}
                defaultZoom={18}
                >        
                </GoogleMapReact>
                : null  
            }
        </div>
        );
    }
}    
 
export default Geolocation;