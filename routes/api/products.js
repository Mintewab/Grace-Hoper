const router = require("express").Router();
const productController = require("../../controllers/productControllers");router.route("/")


router.route("/")
  console.log("hello")

// Matches with "/api/books/:id"
router
  .route("/:id")
 console.log("hello id")

module.exports = router;