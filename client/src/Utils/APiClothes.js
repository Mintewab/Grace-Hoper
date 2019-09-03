import axios from "axios";

export default {
  // Gets all Products
  getClothes: function() {
    return axios.get("/api/Clothes");
  },
  // Gets the Product with the given id
  getBook: function(id) {
    return axios.get("/api/Clothes/" + id);
  },
  // Deletes the Product with the given id
  deleteBook: function(id) {
    return axios.delete("/api/Clothes/" + id);
  },
  // Saves a Product to the database
  saveCloth: function(ClothData) {
    return axios.post("/api/Cloth", ClothData);
  }
};