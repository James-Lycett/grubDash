const path = require("path");

// just a simple welcome message for the homepage
function welcome(req, res, next) {
    const welcomeMessage = "Welcome to the grubDash API, please refer to the readMe at https://github.com/James-Lycett/grubDash for instructions"
    res.send(welcomeMessage)
}

// TODO: add request instructions for API users

module.exports = {
    welcome
}