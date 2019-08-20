import React from "react";
import "../Styles/GalleryItem.css";

function GalleryItem(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ol>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Catagory:</strong> {props.Catagory}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ol>
      </div>
      <span onClick={() => props.removeGalleryItem(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default GalleryItem;
