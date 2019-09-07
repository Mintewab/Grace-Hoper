import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Containers/NavBarComponent"
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import PrivateRoute from "./auth/PrivateRoute";
import ProfilePage from "./Pages/UserProfile";
import AdminRoute from "./auth/AdminRoute";
import AdminPage from "./Pages/AdminPage";
import AddCategory from "./admin/AddCatagory";
import AddProduct from "./admin/AddProduct";
import Shop from "./Pages/Shop";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
const Routes = () => {
   return (
       <BrowserRouter>
        <div>
            <NavBar />
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/shop" exact component={Shop} />
               <Route path="/login" exact component={LogIn} />
               <Route path="/signup" exact component={Signup} />
               <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={ProfilePage}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminPage}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
           </Switch>
        </div>
       </BrowserRouter>
   );
};
export default Routes;