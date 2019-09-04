const router = require("express").Router();
const ClothController = require("../../controllers/ClothController");



router.route("/", )
  .get(ClothController.findAll)
  .post(ClothController.create);


router
  .route("/:id")
  .get(ClothController.findById)
  .put(ClothController.update)
  .delete(ClothController.remove);

module.exports = router;