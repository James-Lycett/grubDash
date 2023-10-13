const router = require("express").Router();
const controller = require("./orders.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

// "/orders" route for all orders-data
router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

// "/orders/:orderId" route for a single orders-data entry
router
    .route("/:orderId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed)



module.exports = router;
