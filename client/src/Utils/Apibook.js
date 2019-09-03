import axios from "axios";

export default {
  // Gets all Products
  getBooks: function() {
    return axios.get("/api/Books");
  },
  // Gets the Product with the given id
  getBook: function(id) {
    return axios.get("/api/Books/" + id);
  },
  // Deletes the Product with the given id
  deleteBook: function(id) {
    return axios.delete("/api/Books/" + id);
  },
  // Saves a Product to the database
  saveBook: function(BookData) {
    return axios.post("/api/Book", BookData);
  }
};