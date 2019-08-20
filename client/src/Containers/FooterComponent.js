import React from "react";

class Footer extends React.Component { 
    constructor(props){
        super(props);
        this.state = { 
            name:"Grace Hoper"
        };
    }
    render(){
        return(
            <footer>By {this.state.name} @2019</footer>
        );
    }
}
export default Footer;