const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/grace-hoper"
);

const productSeed = [
  {
    catagory: "Clothing",
    productName: "Calvin Klien jacket",
    condition:"Good",
    date: new Date(Date.now())
  },
  {
    catagory: "Clothing",
    productName: "Jordan shoes",
    condition: "Excellent",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "Samsung Tv",
    condition: "Good",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "Iphone 8 plus",
    condition: "Excellent",
    date: new Date(Date.now())
  },
  {
    catagory: "Furniture",
    productName: "Mattresses",
    condition:"Good",
    date: new Date(Date.now())
  },
  {
    catagory: "Housewares",
    productName: "Microwave",
    condition: "Excellent",
    date: new Date(Date.now())
  },
  {
    catagory: "Beauty",
    productName: "Clinique",
    condition: "Good",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "Iphone 8 plus",
    condition: "Excellent",
    date: new Date(Date.now())
  },
  {
    catagory: "Furniture",
    productName: "Luca Modern Sofa",
    condition:"Good",
    date: new Date(Date.now())
  },
  {
    catagory: "Clothing",
    productName: "Nike pants",
    condition: "Excellent",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "kodak Camera",
    condition: "Good",
    date: new Date(Date.now())
  },
  {
    catagory: "Housewares",
    productName: "Refrigerators",
    condition: "Excellent",
    date: new Date(Date.now())
  },
  
];

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


