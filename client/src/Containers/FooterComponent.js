import React from "react";
import "../Styles/Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Grace Hoper"
        };
    }
    render() {
        return (
            <div>
                <footer className="footer">By {this.state.name} @2019</footer>
             
            </div>
                );
        }
    }
export default Footer;