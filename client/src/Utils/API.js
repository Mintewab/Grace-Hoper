import axios from "axios";
// import { func } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/@types/prop-types";

export default {
  // Gets all Products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the Product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the Product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a Product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },

  signup: function(user){
    return axios.post("/api/customer/", user)
  }
};