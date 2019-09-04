import React, { Component } from "react";
import API from "../Utils/API"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Card from "../Components/Card/Card"
import "../../src/Components/Card/Card.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FloatNav from "react-uwp/FloatNav";
import RatingControl from "react-uwp/RatingControl";
import IconButton from "react-uwp/IconButton";

const baseStyle: React.CSSProperties = {
    margin: "8px 0",
    display: "block"
  };

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
                <FloatNav
              style={{ margin: "20px 0" }}
              isFloatRight={false}
              focusItemIndex={1}
              topNode={[
               
              ]}
              expandedItems={[{
                iconNode: (
                  <IconButton hoverStyle={{}} activeStyle={{}}>
                    RatingStarFillReducedPaddingHTMLLegacy
                  </IconButton>
                ),
                title: "Add to Favorites"
              }, {
                iconNode: (
                  <IconButton hoverStyle={{}} activeStyle={{}}>
                    WebcamLegacy
                  </IconButton>
                ),
                title: "My Account"
              }, {
                iconNode: (
                  <IconButton hoverStyle={{}} activeStyle={{}}>
                    HomeSolid
                  </IconButton>
                ),
                title: "Jump to Home",
                href: "/"
              }]}
              bottomNode={[
           
              ]}
            />
          
             <Container>
                 <Row>
            {this.state.products.map(product => (
                 <Card  key={product._id} style={{ width: '21rem' }}>
                 <Card.Img style={{ width: '10rem', height: "rem"}}variant="top"src={product.image} />
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
                    <RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 15 }}
  iconRatedStyle={{ color: "Pink"}}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
            <Button variant="primary">Add to Carts</Button>
                 </Card.Body>
               </Card>
            ))}
            </Row>
</Container>
        </div>
        ) 
    }
}
export default Products;