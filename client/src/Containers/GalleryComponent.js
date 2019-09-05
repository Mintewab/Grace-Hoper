import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/GalleryItem.css";

class Gallery extends Component {
   
    render( ){
        return(
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-3"
                src="https://www.ci.oswego.or.us/sites/default/files/styles/banner/public/imageattachments/banner-recycle.jpg?itok=pzXn2oCY"
                alt="First slide"
              />
              <Carousel.Caption>
          
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-3"
                src="https://thesavvycouple.com/wp-content/uploads/2017/05/Save-Money-1.jpg"
                alt="Second slide"
              />
          
              <Carousel.Caption>
                
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-3"
                src="https://boston.citymomsblog.com/wp-content/uploads/sites/55/2016/01/donation-pick-up.jpg"
                alt="Third slide"
              />          
              <Carousel.Caption>
                          </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
     )
    }
}


export default Gallery;