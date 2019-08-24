import React, { Component } from 'react';
import Gallery from "../Containers/GalleryComponent";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../src/Components/Card/Card.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FloatNav from "react-uwp/FloatNav";
import IconButton from "react-uwp/IconButton";

class GardenTools extends Component {
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
            <Container>
  <Row>
            <Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfgpsn8Cq_m4rGm-7JPbWDlj8NN2MfeSZSc-2rvDh6lR7S6_PcGEj84yRhv1X7VMp3w55nr-FzFpqQElxS99y73vr1nz6dzZciwCAYLJ9tghtbUfokyXU&usqp=CAc" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Garden Tools</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Garden Tools and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfgpsn8Cq_m4rGm-7JPbWDlj8NN2MfeSZSc-2rvDh6lR7S6_PcGEj84yRhv1X7VMp3w55nr-FzFpqQElxS99y73vr1nz6dzZciwCAYLJ9tghtbUfokyXU&usqp=CAc" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Garden Tools</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Garden Tools and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfgpsn8Cq_m4rGm-7JPbWDlj8NN2MfeSZSc-2rvDh6lR7S6_PcGEj84yRhv1X7VMp3w55nr-FzFpqQElxS99y73vr1nz6dzZciwCAYLJ9tghtbUfokyXU&usqp=CAc" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Garden Tools</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Garden Tools and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfgpsn8Cq_m4rGm-7JPbWDlj8NN2MfeSZSc-2rvDh6lR7S6_PcGEj84yRhv1X7VMp3w55nr-FzFpqQElxS99y73vr1nz6dzZciwCAYLJ9tghtbUfokyXU&usqp=CAc" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Garden Tools</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Garden Tools and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card><Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfgpsn8Cq_m4rGm-7JPbWDlj8NN2MfeSZSc-2rvDh6lR7S6_PcGEj84yRhv1X7VMp3w55nr-FzFpqQElxS99y73vr1nz6dzZciwCAYLJ9tghtbUfokyXU&usqp=CAc" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Garden Tools</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Garden Tools and make up the bulk of
      the card's content.
    </Card.Text >
    <Button variant="primary">Add to Carts</Button>
  </Card.Body>
</Card><Card style={{ width: '20rem' }}>
  <Card.Img style={{ width: '8rem' }}variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfgpsn8Cq_m4rGm-7JPbWDlj8NN2MfeSZSc-2rvDh6lR7S6_PcGEj84yRhv1X7VMp3w55nr-FzFpqQElxS99y73vr1nz6dzZciwCAYLJ9tghtbUfokyXU&usqp=CAc" />
  <Card.Body>
    <Card.Title style={{ color: 'Black' }}>Garden Tools</Card.Title>
    <Card.Text style={{ color: 'Black' }}>
      Some quick example text to build on the Garden Tools and make up the bulk of
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

export default GardenTools;