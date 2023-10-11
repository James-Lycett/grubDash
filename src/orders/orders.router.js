const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed")

router
    .route("/")
    .all(methodNotAllowed)


router
    .route("/:orderId")
    .all(methodNotAllowed)



module.exports = router;
