// import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as React from "react";
import * as PropTypes from "prop-types";

import FloatNav from "react-uwp/FloatNav";
import IconButton from "react-uwp/IconButton";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../src/Components/Card/Card.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import RatingControl from "react-uwp/RatingControl";


const baseStyle: React.CSSProperties = {
  margin: "10px 0",
  display: "block"
};

class Clothes extends React.Component {
    static contextTypes = { theme: PropTypes.object };
    context: { theme: ReactUWP.ThemeType };
 
    render() {
        const { theme } = this.context;
        const staticButtonStyle: React.CSSProperties = {
          background: theme.accent,
          color: "#fff"
        };
    
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
       
<Card style={{ width: '20rem' }}>
 <Card.Img style={{ width: '6rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
 <Card.Body>
   <Card.Title style={{ color: 'Black' }}>Clothes</Card.Title>
   <Card.Text style={{ color: 'Black' }}>
     Some quick example text to build on the Clothes and make up the bulk of
     the card's content.
   </Card.Text >
   

<RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 28 }}
  iconRatedStyle={{ color: "Pink" }}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
<Button variant="primary">Add to Carts</Button>
 </Card.Body>
</Card>


<Card style={{ width: '20rem', height:"25rem" }}>
 <Card.Img style={{ width: '6rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
 <Card.Body>
   <Card.Title style={{ color: 'Black' }}>Clothes</Card.Title>
   <Card.Text style={{ color: 'Black' }}>
     Some quick example text to build on the Clothes and make up the bulk of
     the card's content.
   </Card.Text >
   

<RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 28 }}
  iconRatedStyle={{ color: "Pink" }}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
<Button variant="primary">Add to Carts</Button>
 </Card.Body>
</Card>


<Card style={{ width: '20rem', height:"25rem" }}>
 <Card.Img style={{ width: '6rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
 <Card.Body>
   <Card.Title style={{ color: 'Black' }}>Clothes</Card.Title>
   <Card.Text style={{ color: 'Black' }}>
     Some quick example text to build on the Clothes and make up the bulk of
     the card's content.
   </Card.Text >
   

<RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 28 }}
  iconRatedStyle={{ color: "Pink" }}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
<Button variant="primary">Add to Carts</Button>
 </Card.Body>
</Card>


<Card style={{ width: '20rem', height:"25rem" }}>
 <Card.Img style={{ width: '6rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
 <Card.Body>
   <Card.Title style={{ color: 'Black' }}>Clothes</Card.Title>
   <Card.Text style={{ color: 'Black' }}>
     Some quick example text to build on the Clothes and make up the bulk of
     the card's content.
   </Card.Text >
   

<RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 28 }}
  iconRatedStyle={{ color: "Pink" }}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
<Button variant="primary">Add to Carts</Button>
 </Card.Body>
</Card>
<Card style={{ width: '20rem', height:"25rem" }}>
 <Card.Img style={{ width: '6rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
 <Card.Body>
   <Card.Title style={{ color: 'Black' }}>Clothes</Card.Title>
   <Card.Text style={{ color: 'Black' }}>
     Some quick example text to build on the Clothes and make up the bulk of
     the card's content.
   </Card.Text >
   

<RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 28 }}
  iconRatedStyle={{ color: "Pink" }}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
<Button variant="primary">Add to Carts</Button>
 </Card.Body>
</Card>




<Card style={{ width: '20rem', height:"25rem" }}>
 <Card.Img style={{ width: '6rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvrqUWjYPDh6mQ2aD-MC9biKFQAWOeRJBiuyJTcWLtBcrdSsf" />
 <Card.Body>
   <Card.Title style={{ color: 'Black' }}>Clothes</Card.Title>
   <Card.Text style={{ color: 'Black' }}>
     Some quick example text to build on the Clothes and make up the bulk of
     the card's content.
   </Card.Text >
   

<RatingControl
  style={baseStyle}
  iconStyle={{ fontSize: 28 }}
  iconRatedStyle={{ color: "Pink" }}
  // icon="HeartFillLegacy"
  defaultRating={5}
  maxRating={5}
/>
<Button variant="primary">Add to Carts</Button>
 </Card.Body>
</Card>

</Row>
</Container>
</div>
       );
   }
}

    

export default  Clothes;