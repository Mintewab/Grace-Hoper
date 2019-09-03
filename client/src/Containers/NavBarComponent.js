import React from 'react';
import MenuBar from '../Components/MenuBarComponent';
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

    render() {
        return (
            <div>
            <ul>                
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>               
                <li><Link to="/Login">Login</Link></li>
                {/* <li><Link to="/About">About</Link></li> */}
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/AddItem">AddItem</Link></li>
            </ul>
            <MenuBar />
            </div>
        );
    }
}

export default NavBar;