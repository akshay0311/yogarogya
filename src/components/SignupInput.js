import React from 'react';
import "./LoginInput.css";
export default class SignupInput extends React.Component{
    
    render(){
    return (
            <div className="login">
            <div className="login_container">
                    <h1>Sign up</h1>
                    <form>
                        <h5>First Name</h5>
                        <input type="text" 
                        />
                        <h5>Last Name</h5>
                        <input type="text" 
                        />
                        <h5>Email</h5>
                        <input type="text" 
                        />
                        <h5>Password</h5>
                        <input
                        type="password"
                        />
                        <h5>Phone</h5>
                        <input type="text" 
                        />
                         <p>
                            By signing in you agree to Yoggarogya terms and conditions
                        </p>
                        <button type="submit" className="login_signin" onClick={this.props.nextStep}>Sign up</button>
                    </form>
            </div>
        </div>
    )
    }
}
