import React from "react";
import "../Styles/Search.css";

function Search(props) {
  return (
    <div className="topnav">
        <div className="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit">Submit</button>
            </form>
        </div>
     </div>
 
 );
 }

 export default Search;