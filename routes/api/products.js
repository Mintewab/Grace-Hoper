const router = require("express").Router();
const productController = require("../../controllers/productControllers");


router.route("/")
  .get(productController.findAll)
  .post(productController.create);


router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

module.exports = router;