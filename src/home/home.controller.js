const path = require("path");

// just a simple welcome message for the homepage
function welcome(req, res, next) {
    const message = "Welcome to the grubDash API"
    res.send(message)
}

// TODO: add request instructions for API users

module.exports = {
    welcome
}