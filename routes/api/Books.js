const router = require("express").Router();
const BookController = require("../../controllers/BookController");



router.route("/", )
  .get(BookController.findAll)
  .post(BookController.create);


router
  .route("/:id")
  .get(BookController.findById)
  .put(BookController.update)
  .delete(BookController.remove);

module.exports = router;