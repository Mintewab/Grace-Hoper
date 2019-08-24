import React, { Component } from "react";
import API from "../Utils/API"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Card from "../Components/Card/Card"
import "../../src/Components/Card/Card.css";

class Products extends Component {

    state = {
        products: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        API.getProducts()
         .then(res=> this.setState({products:res.data}))
        .catch(err => console.log(err));
    };

    render(){
        return (
         <div>
            {this.state.products.map(product => (
                 <Card  key={product._id} style={{ width: '20rem' }}>
                 <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
                 <Card.Body>
                   <Card.Title style={{ color: 'Black' }}>{product.productName}</Card.Title>
                   <Card.Text style={{ color: 'Black' }}>
                   {product.catagory}
                   </Card.Text >
                   <Card.Text style={{ color: 'Black' }}>
                   {product.condition}                   
                   </Card.Text >
                   <Button variant="primary">Add to Carts</Button>
                 </Card.Body>
               </Card>
            ))};
            
        </div>
        ) 
    }
}

export default Products;