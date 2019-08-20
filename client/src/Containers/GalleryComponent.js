import React, { Component } from "react";
import galleryItems from '../GalleryItems.json';
import GalleryItem from "../Components/GalleryItemComponent";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryItems
        }
    };
    removeGalleryItem = id => {
        console.log("entered removed freind")
        const galleryItems = this.state.galleryItems.filter(galleryItem => galleryItem.id !== id);
        this.setState({ galleryItems });
        console.log(galleryItems)
    };
    render( ){
        return(
        <ul className= "nav-ul">
        {this.state.galleryItems.map(galleryItem => (
            <GalleryItem 
                removeGalleryItem={this.removeGalleryItem}
                id={galleryItem.id}
                key={galleryItem.id}
                name={galleryItem.name}
                image={galleryItem.image}
                Catagory={galleryItem.Catagory}
                location={galleryItem.location}
                />
        ))}
        </ul>
     )
    }
}


export default Gallery;