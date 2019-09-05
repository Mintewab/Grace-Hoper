    
import React from "react";

// import CardBtn from "../CardBtn";



function Card(props) {
  return (
    <div className="card">
     {props.children}
    </div>
  );
}

export default Card;
