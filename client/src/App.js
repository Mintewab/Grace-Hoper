
import * as React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './App.css';
import Footer from './Containers/FooterComponent';
import NavBar from './Containers/NavBarComponent';
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
// import Products from "./Pages/Products";
import Books from "./Pages/Books";
import ChildrenToys from "./Pages/ChildrenToys";
import Clothes from "./Pages/Clothes";
import Electronics from "./Pages/Electronics";
import Jewelry from "./Pages/Jewelry";
import Movies from "./Pages/Movies";
import Sport from "./Pages/Sport";
import GardenTools from './Pages/GardenTools';
import Search from './Pages/Search';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";

class App extends React.Component {
  render() {
  return (
    <UWPThemeProvider
    theme={getTheme({
      themeName: "dark", // set custom theme
      accent: "#0078D7", // set accent color
      useFluentDesign: true, // sure you want use new fluent design.
      desktopBackgroundImage: "http://127.0.0.1:8092/static/images/jennifer-bailey-10753.jpg" // set global desktop background image
    })}
  >
    <div>
      <Router>
        <div>
          <NavBar />         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/Search" component={Search} />
            {/* <Route exact path="/Products" component={Products} /> */}
            <Route exact path="/Books" component={Books} />
            <Route exact path="/ChildrenToys" component={ChildrenToys} />
            <Route exact path="/Clothes" component={Clothes} />
            <Route exact path="/Electronics" component={Electronics} />
            <Route exact path="/Jewelry" component={Jewelry} />
            <Route exact path="/Movies" component={Movies} />
            <Route exact path="/Sport" component={Sport} />
            <Route exact path="/GardenTools" component={GardenTools} />
          </Switch>
          <Footer />
        </div>
      </Router>
      
    </div>
  </UWPThemeProvider>

  );
  }
}

export default App;
