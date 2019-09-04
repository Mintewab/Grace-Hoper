import React, { Component } from "react";
import API from "../Utils/APiClothes"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Card from "../Components/Card/Card"
import "../../src/Components/Card/Card.css";

class Clothes extends Component {

    state = {
        Clothes: []
    };

    componentDidMount(){
        this.loadClothes();
    }

    loadClothes = () => {
        API.getClothes()
         .then(res=> this.setState({Clothes:res.data}))
        .catch(err => console.log(err));
    };

    render(){
        return (
         <div>
            {this.state.Clothes.map(Cloth => (
                 <Card  key={Cloth._id} style={{ width: '20rem' }}>
                 <Card.Img style={{ width: '10rem', height: "10rem"}}variant="top"src={Cloth.image} />
                 <Card.Body>
                   <Card.Title style={{ color: 'Black' }}>{Cloth.ProductName}</Card.Title>
                   <Card.Text style={{ color: 'Black' }}>
                   {Cloth.catagory  }
                   
                 
                   </Card.Text >
                   <Card.Text style={{ color: 'Black' }}>
                   {Cloth.condition}                   
                   </Card.Text >
                   <Button variant="primary">Add to Carts</Button>
                 </Card.Body>
               </Card>
            ))};
            
        </div>
        ) 
    }
}

export default Clothes;