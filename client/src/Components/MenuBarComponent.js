import React from 'react';
import "../Styles/MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
       
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
<div className= "MenuBarHam"></div>
<div className= "MenuBarHam"></div>
<div className= "MenuBarHam"></div>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <Link to="/Clothes"> <button className="dropdown-item" type="button">Clothes</button> </Link>
        <Link to="/Electronics"><button className="dropdown-item" type="button">Electronics</button> </Link>
        <Link to="/ChildrenToys"><button className="dropdown-item" type="button">Children Toys</button> </Link>
   {/* <Link to="/Products"> <button className="dropdown-item" type="button">Products</button> </Link> */}
        <Link to="/Books"><button className="dropdown-item" type="button">Books and Audible</button> </Link>
        <Link to="/GardenTools"><button className="dropdown-item" type="button">Home, Garden and Tools</button> </Link>
        <Link to="/Movies"><button className="dropdown-item" type="button">Movies,Music and Games</button> </Link>
        <Link to="/Sport"><button className="dropdown-item" type="button">Sports and Outdoors</button></Link>
        <Link to="/Jewelry"><button className="dropdown-item" type="button">Jewelry and Watches</button></Link>
        </div>
      </div>
    );
}

export default MenuBar;