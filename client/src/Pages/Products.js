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
                 <Card  key={product._id} style={{ width: '40rem' }}>
                 <Card.Img style={{ width: '10rem', height: "10rem"}}variant="top"src={product.image} />
                 <Card.Body>
                   <Card.Title style={{ color: 'Black' }}>{product.productName}</Card.Title>
                   <Card.Text style={{ color: 'Black' }}>
                   {product.catagory}
                   </Card.Text >
                   <Card.Text style={{ color: 'Black' }}>
                   {product.condition}                   
                   </Card.Text >
                   <Card.Text style={{ color: 'Black' }}>
                    Some quick example text to build on the Books and make up the bulk of
                        the card's content.
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
