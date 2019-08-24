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
    image: "https://img-static.tradesy.com/item/20905627/calvin-klein-black-men-s-biker-jacket-size-10-m-0-1-960-960.jpg",
    date: new Date(Date.now())
  },
  {
    catagory: "Clothing",
    productName: "Jordan shoes",
    condition: "Excellent",
    image: "https://images.footlocker.com/is/image/EBFL2/Q9213100_a1?wid=640&hei=640&fmt=png-alpha",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "Samsung Tv",
    condition: "Good",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287916_sd.jpg;maxHeight=200;maxWidth=200",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "Iphone 8 plus",
    condition: "Excellent",
    image:"https://www.sprint.com/content/dam/sprint/commerce/devices/apple/iphone_8_plus/space_gray/new/devicenb_200x200.png",
    date: new Date(Date.now())
  },
  {
    catagory: "Furniture",
    productName: "Mattress",
    condition:"Good",
    image: "https://cdn.sleepnumber.com/image/upload/f_auto,q_auto:good/v7531834698957074029242179387/medias/%7CDESKTOP%7Cc4-hero-image-sm.jpg.jpg",
    date: new Date(Date.now())
  },
  {
    catagory: "Housewares",
    productName: "Microwave",
    condition: "Excellent",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRspuFidnETkYpYeP-jTfzmwe_IO9SGCvYVCQ4o99ftmt023yN9_N6Ji5BgqI3HOMfvwsEkfh2jJbx9SE1-Dl9d5GswJrMV5xQx6i0jCwgFNHgndcrvAvgJQ&usqp=CAcd",
    date: new Date(Date.now())
  },
  {
    catagory: "Beauty",
    productName: "Clinique",
    condition: "Good",
    image:"https://www.sephora.com/productimages/sku/s1538362-main-zoom.jpg",
    date: new Date(Date.now())
  },
  {
    catagory: "Furniture",
    productName: "Luca Modern Sofa",
    condition:"Good",
    image: "https://cdn.roveconcepts.com/sites/default/files/styles/uc_product_full/public/Luca_Sofa_Modern-Felt_Alesund_1.jpg",
    date: new Date(Date.now())
  },
  {
    catagory: "Clothing",
    productName: "Nike pants",
    condition: "Excellent",
    image: "https://cdn.jackrabbit.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/e/mens-nike-phenom-pant-2-color-black-size-s-609465357922-01.2732.jpg",
    date: new Date(Date.now())
  },
  {
    catagory: "Electronics",
    productName: "kodak Camera",
    condition: "Good",
    image: "https://static.bhphoto.com/images/images2500x2500/1486993535_1318519.jpg",
    date: new Date(Date.now())
  },
  {
    catagory: "Housewares",
    productName: "Refrigerator",
    condition: "Excellent",
    image: "http://c.shld.net/rpx/i/s/i/spin/10130653/prod_17799782112?wid=600&hei=600&op_sharpen=1",
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


