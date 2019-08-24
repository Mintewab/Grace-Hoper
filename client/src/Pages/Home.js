import React, { Component } from 'react';
import Gallery from "../Containers/GalleryComponent";
import { Col, Row, Container } from "../Components/Grid";
import Footer from "../Containers/FooterComponent"

class Home extends Component {
    render() {
        return(<Container>
            <Row>
                <Col size="md-12">
                <Gallery />
                <Footer />
            </Col>
            </Row>
            </Container> 
           
        );
    }
}

export default Home;