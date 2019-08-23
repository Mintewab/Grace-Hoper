import React, { Component } from "react";
import API from "../utils/API";
import Card from "../Component/Card/Card"

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
                  </strong>
              </Card>
            ))};
        </div>
        ) 
    }
}

export default Products;