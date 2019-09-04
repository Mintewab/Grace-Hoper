const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const Schema = mongoose.Schema;
const multer = require('multer');
const upload = multer ({dest: 'uploads/'})
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
console.log("check")
// Add routes, both API and view
app.use(routes);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grace-hoper", 
{
  useCreateIndex: true,
  useNewUrlParser: true
}
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});