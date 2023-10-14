const express = require("express");
const cors = require("cors");
const morgan = require("morgan")

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const homeRouter = require("./home/home.router")
const ordersRouter = require("./orders/orders.router");
const dishesRouter = require("./dishes/dishes.router");

const app = express();

// dev server tracking
app.use(morgan("dev"))

// lets this API be used by any website
app.use(cors());
app.use(express.json());

// url routers
app.use("/" , homeRouter)
app.use("/dishes", dishesRouter);
app.use("/orders", ordersRouter);

// handle 404 errors
app.use(notFound);

// handle all other errors
app.use(errorHandler);

module.exports = app;
