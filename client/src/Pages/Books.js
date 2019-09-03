import React, { Component } from "react";
import API from "../Utils/Apibook"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Card from "../Components/Card/Card"
import "../../src/Components/Card/Card.css";

class Books extends Component {

    state = {
        Books: []
    };

    componentDidMount(){
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
         .then(res=> this.setState({Books:res.data}))
        .catch(err => console.log(err));
    };

    render(){
        return (
         <div>
            {this.state.Books.map(Book => (
                 <Card  key={Book._id} style={{ width: '20rem' }}>
                 <Card.Img style={{ width: '10rem', height: "10rem"}}variant="top"src={Book.image} />
                 <Card.Body>
                   <Card.Title style={{ color: 'Black' }}>{Book.ProductName}</Card.Title>
                   <Card.Text style={{ color: 'Black' }}>
                   {Book.catagory  }
                   
                 
                   </Card.Text >
                   <Card.Text style={{ color: 'Black' }}>
                   {Book.condition}                   
                   </Card.Text >
                   <Button variant="primary">Add to Carts</Button>
                 </Card.Body>
               </Card>
            ))};
            
        </div>
        ) 
    }
}

export default Books;