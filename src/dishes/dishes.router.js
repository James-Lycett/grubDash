const router = require("express").Router();
const controller = require("./dishes.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")


// "/dishes" routes for all dishes-data
router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)
    

// "/dishes/:dishId" routes for a single dishes-data entry
router
    .route("/:dishId")
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed)

module.exports = router;
