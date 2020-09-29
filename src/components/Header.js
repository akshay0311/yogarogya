import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderLogo from "../img/yog.png";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            windowWidth: window.innerWidth,  
        };
        }
        handleResize = (e) => {
            this.setState({ windowWidth: window.innerWidth });
        };
        
        componentDidMount() {
            window.addEventListener("resize", this.handleResize);
        }
        
        componentWillUnmount() {
            window.addEventListener("resize", this.handleResize);
        } 
        handleClick = (event) => {
            this.setState({
                anchorEl: event.currentTarget
            });
          };
        
        handleClose = (event) => {
            this.setState({
                anchorEl: null
            });
          };

    render(){
        const { windowWidth } = this.state;
        if (windowWidth >= 1024){
        return (
            <div className="header">
                <Grid container spacing={0}>
                    {/*Image*/}
                    <Grid item xs={12} sm={6}>
                        <img className="header_logo" src={HeaderLogo} alt="t"/>
                    </Grid>
                    {/*Links*/}
                    <Grid  item xs={12} sm={6}>
                        <div className="header_links">
                            <h4><Link className="header_linksContent" to="#">Home</Link></h4>
                            <h4><Link className="header_linksContent" to="#">Blog</Link></h4>
                            <h4><Link className="header_linksContent" to="#">Register as Professional</Link></h4>
                            <h4><Link className="header_linksContent" to="#">Logout</Link></h4>
                            <h4><Link className="header_linksContent" to="#">Setting</Link></h4>
                        </div>
                    </Grid>
                </Grid>    
                </div>
            )
        } 
         else {
            return (
                    <AppBar position="fixed" color="default">
                        <Toolbar variant="dense">
                            <img className="header_logo" src={HeaderLogo}/>
                            <MenuIcon className="menu_Icon" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}/>
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}>
                                <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="/">Home</Link></MenuItem>
                                <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="/about">Blog</Link></MenuItem>
                                <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="#">Register as professional</Link></MenuItem>
                                <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="#">Logout</Link></MenuItem>
                                <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="#">Setting</Link></MenuItem>
                            </Menu>
                        </Toolbar>
                    </AppBar> 
            )
        }   
    }    
}

export default Header;
