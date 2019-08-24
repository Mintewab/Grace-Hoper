    
import React, { Component } from "react";
import API from "../Utils/API";
import Card from "../Components/Card/Card"

class Products extends Component {

    state = {
        products: []
    };
    

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        API.getProducts()
        .then(res=> this.setState({ products: res.data}))
        .catch(err => console.log(err));
    };

    render(){
        return (
         <div>
            {this.state.products.map(product => (
              <Card key={product._id}>
                  <strong >
                      <h4>
                      catagory : {product.catagory}
                      </h4>
                      <h4>
                      Item :     {product.productName}
                      </h4>
                      <h4>
                      Condition: {product.condition}
                      </h4>
                      <img className="card-img-top  img-fluid"  alt=""src={product.image}></img>
                  </strong>
              </Card>
            ))};
        </div>
        ) 
    }
}

export default Products;