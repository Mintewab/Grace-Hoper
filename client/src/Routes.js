import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/SignUp";

import Home from "./pages/Home";
import NavBar from "./Containers/NavBarComponent"
import LogIn from "./pages/LogIn";

const Routes = () => {
    return (
        <BrowserRouter>
        <div>
        <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/logIn" exact component={LogIn} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
            </div>
        </BrowserRouter>
       
    );
};

export default Routes;