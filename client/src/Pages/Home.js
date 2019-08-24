import React, { Component } from 'react';
import Gallery from "../Containers/GalleryComponent";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../src/Components/Card/Card.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FloatNav from "react-uwp/FloatNav";
import IconButton from "react-uwp/IconButton";

class Home extends Component {
    render() {
        return(
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
            <Gallery />
                      <Container>
  <Row>
            <Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PjyZHZO8sQii4he_GZFmUHvvXmOK_pLM6uGUKH2-tH1YdhIy" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Advertised Products</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Advertised Products and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PjyZHZO8sQii4he_GZFmUHvvXmOK_pLM6uGUKH2-tH1YdhIy" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Advertised Products</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Advertised Products and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PjyZHZO8sQii4he_GZFmUHvvXmOK_pLM6uGUKH2-tH1YdhIy" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Advertised Products</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Advertised Products and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PjyZHZO8sQii4he_GZFmUHvvXmOK_pLM6uGUKH2-tH1YdhIy" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Advertised Products</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Advertised Products and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card><Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PjyZHZO8sQii4he_GZFmUHvvXmOK_pLM6uGUKH2-tH1YdhIy" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Advertised Products</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Advertised Products and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card><Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PjyZHZO8sQii4he_GZFmUHvvXmOK_pLM6uGUKH2-tH1YdhIy" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Advertised Products</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Advertised Products and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
</Row>
</Container>
</div>
        );
    }
}

export default Home;