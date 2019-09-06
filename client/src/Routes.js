import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Containers/NavBarComponent"
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
const Routes = () => {
   return (
       <BrowserRouter>
        <div>
            <NavBar />
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/login" exact component={LogIn} />
               <Route path="/signup" exact component={Signup} />
           </Switch>
        </div>
       </BrowserRouter>
   );
};
export default Routes;