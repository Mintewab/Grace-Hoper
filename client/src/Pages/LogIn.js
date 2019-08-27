
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import PasswordBox from "react-uwp/PasswordBox";
import TextBox from "react-uwp/TextBox";
import Icon from "react-uwp/Icon";
import "../../src/Styles/LogIn.css";

const baseStyle: React.CSSProperties = {
    margin: "10px 10px 10px 0",
    
  };
class LogIn extends React.Component {
    static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
    render() {
        return(
            <div className= "logIn">
        <TextBox
           style={{ width: 340, ...baseStyle, }}
          background="none"
          placeholder="Insert your User name"
          leftNode={<Icon style={{ margin: "0 8px"}}>HeartFillLegacy</Icon>}
        />
        <PasswordBox
          style={{ width: 340, ...baseStyle }}
          placeholder="Input Your Password"
          passwordBoxHeight={28}
        />

      </div>
        );
    }
}

export default LogIn;;

   