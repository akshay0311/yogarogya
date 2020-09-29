import React from 'react';
import "./HomeHeader.css";
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeLogo from "../img/yogarogya_log.png";
import HomeLogo1 from "../img/yoga.png";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            windowWidth: window.innerWidth,
            anchorEl: null    
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
    if (windowWidth >= 770){
    return ( 
    
        <header className="header-section">
            <div className="header-top">
               <button><Link className="header_topLink" to="/trial">Book Trial</Link></button>
            </div>
            <div className="header-bottom mt-4">
                <Link to="/" className="site-logo">
                    <img src={HomeLogo} alt="t"/>
                </Link>
                <div className="container-fluid">
                    <ul className="main-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to ="/About">About</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">Register as:</Link>
                          <ul className="sub-menu">
                                <li><Link to ="/signup/instructor" className="w3-text-black">Instructor</Link></li>
                                <li><Link to ="/signup/customer"className="w3-text-black">Customer</Link></li>
                            </ul>
                        </li>	
                        <li><Link to="#">Login as:</Link>	
                            <ul className="sub-menu">
                                <li><Link to = "/login/instructor"className="w3-text-black">Instructor</Link></li>
                                <li><Link to = "/login/customer"className="w3-text-black">Customer</Link></li>
                            </ul>
                        </li>	
                    </ul>	
                </div>
            </div>
        </header>  
    )
    }
    else {
        return (
            <div>
            <AppBar position="fixed" color="default">
                <Toolbar variant="dense">
                    <img className="logo" src={HomeLogo1}/>
                    <span className="menu_book">
                        <button><Link className="menu_bookButtonLink" to="/trial">Book Trial</Link></button>
                    </span>
                    <MenuIcon className="menu_Icon" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}/>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="/">Home</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="/about">About</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to="#">Blog</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to= "/signup/customer">Register as Customer</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to= "/signup/instructor">Register as Instructor</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to= "/login/customer">Login as Customer</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link className="header_menuItem" to= "/login/instructor">Login as Instructor</Link></MenuItem>
                    </Menu> 
                </Toolbar>  
            </AppBar> 
          </div>
        )
    }
}    
}

export default HomeHeader;
