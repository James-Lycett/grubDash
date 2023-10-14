const router = require("express").Router();
const controller = require("./home.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

// "/" route for base url landing
router
    .route("/")
    .get(controller.welcome)
    .all(methodNotAllowed)


module.exports = router