import React from "react";
import "../Styles/Search.css";
import API from "../Utils/API";




class Form extends React.Component {
  state = {
    productData:{ productimage:this.productimage,
      productName: this.productName,
      catagory:this.productCatagory,
      condition:this.productCondition}
};
  // state = {
  //   productimage:this.productimage,
  //    productName: this.productName,
  //    productCatagory:this.productCatagory,
  //    productCondition:this.productCondition,
  

  // }
  // handle any changes to the input fields
  handleInputChange = event => {
    event.preventDefault();
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
       [name]: value
    //   productimage:this.productimage,
    //  productName: this.productName,
    //  productCatagory:this.productCatagory,
    //  productCondition:this.productCondition,
    });

  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    
     API.saveProduct( {
      image:this.state.productimage,
      productName:this.state.productName,
      catagory:this.state.productCatagory,
      condition:this.state.productCondition})
    .then(res=> this.setState({products:res.data}))
    .catch(err => console.log(err));

    alert(`productimage: ${this.state.productimage}\nproductname: ${this.state.productName}\nproductcatgory:
    ${this.state.productCatagory}\nProductcondition${this.state.productCondition}`);
    this.setState({ productimage: "", productName: "", productCatagory: "", productCondition: ""});
  };

    render() {
        return(
        
         <div> 
        <form >
        <img  alt="productimage: "  src={this.state.productimage} />
        <p>productName: {this.state.productName}</p>
        <p>productCatagory: {this.state.productCatagory}</p>
        <p>productCondition: {this.state.productCondition}</p>
        <input
          type="file" ref={input =>this.fileInput =input}
          placeholder="productimage"
          name="productimage"
          value={this.state.productimage}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          placeholder="prouctName"
          name="productName"
          value={this.state.productName}
          onChange={this.handleInputChange}
        />
         <input
          type="text"
          placeholder="prouctCatagory"
          name="productCatagory"
          value={this.state.productCatagory}
          onChange={this.handleInputChange}
        />
         <input
          type="text"
          placeholder="prouctCondition"
          name="productCondition"
          value={this.state.productCondition}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
            
            
        </form>
           
        </div> 
          );
        }
      }
      
export default Form;