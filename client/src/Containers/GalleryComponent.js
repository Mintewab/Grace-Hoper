import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import GalleryItem from "../components/GalleryItemComponent";

class Gallery extends Component {
   
    render( ){
        return(
          <div>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-5"
                src="https://www.ci.oswego.or.us/sites/default/files/styles/banner/public/imageattachments/banner-recycle.jpg?itok=pzXn2oCY"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Recycle</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className="d-block w-5"
                src="https://thesavvycouple.com/wp-content/uploads/2017/05/Save-Money-1.jpg"
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3>Save Money</h3>
                
              </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                className="d-block w-5"
                src="https://boston.citymomsblog.com/wp-content/uploads/sites/55/2016/01/donation-pick-up.jpg"
                alt="Second slide"
              />          
              <Carousel.Caption>
                <h3>Donate</h3>                
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
          </div>
     )
    }
}


export default Gallery;