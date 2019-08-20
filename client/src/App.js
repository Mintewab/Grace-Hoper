import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './App.css';
import Footer from './Containers/FooterComponent';
import NavBar from './Containers/NavBarComponent';
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Beauty from "./Pages/Beauty";
import Books from "./Pages/Books";
import ChildrenToys from "./Pages/ChildrenToys";
import Clothes from "./Pages/Clothes";
import Electronics from "./Pages/Electronics";
import Jewelry from "./Pages/Jewelry";
import Movies from "./Pages/Movies";
import Sport from "./Pages/Sport";
import GardenTools from './Pages/GardenTools';
import Search from './Pages/Search';

function App() {
  return (
    <div>
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/cart" component={Cart} />


        </Switch>
          <Footer />
        </div>
      </Router>
      
    </div>
  );
}
export default App;