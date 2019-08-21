
const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products");
const customerRoutes = require("./customer");

// Book routes
router.use("/books", productRoutes);

// Google Routes
router.use("/profile", customerRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;