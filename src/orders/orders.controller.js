const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

// gets a list of all orders data from orders-data
function list(req, res, next) {
    res.json({ data: orders})
}


// validates post request .dishes exists and is an array
function validateDishesExist(req, res, next) {
    const { data: { dishes } = {} } = req.body

    if (!dishes) {
        return next({
            status: 400,
            message: `Order must include a dish`
        })
    }

    if (!Array.isArray(dishes) || dishes.length === 0) {
        return next({
            status: 400,
            message: `Order must include at least one dish`
        })
    } else {
        next()
    }
}

// validates post request .dishes[n].quantity property is suitable
function validateDishesQuantity(req, res, next) {
    const { data: { dishes } = {} } = req.body
    const validationConditions = [     
        dish => !dish.quantity,
        dish => dish.quantity <= 0,        
        dish => !Number.isInteger(dish.quantity)
    ]
    const index = dishes.findIndex(dish => validationConditions.some(condition => condition(dish)))
    if (index !== -1) {
        return next({
            status: 400,
            message: `Dish ${index} must have a quantity that is an integer greater than 0`
        })
    } else {
        next()
    }
}

// validates post request body has correct data format
function bodyDataHas(propertyName) {
    return function (req, res, next) {
        const { data = {} } = req.body
        if (data[propertyName]) {
            return next()
        }
        next({ status: 400, message: `Order must include a ${propertyName}` })
    }
}


// posts a new order to orders-data
function create(req, res, next) {
    const { data: { deliverTo, mobileNumber, status, dishes } = {} } = req.body
    const newOrder = {
        id: nextId(),
        deliverTo: deliverTo,
        mobileNumber: mobileNumber,
        status: status,
        dishes: dishes,
    }
    orders.push(newOrder)
    res.status(201).json({ data: newOrder })
}

// validates that order with given id exists in orders-data
function orderExists(req, res, next) {
    const { orderId } = req.params
    const foundOrder = orders.find((order) => order.id === orderId)
    if (!foundOrder) {
        next({
            status: 404,
            message: `Order ${orderId} not found.`
        })
    } else {
        res.locals.order = foundOrder
        return next()        
    }
}

function read(req, res, next) {
    res.json({ data: res.locals.order })
}


module.exports = {

    list,

    create: [
        validateDishesExist,
        validateDishesQuantity,
        bodyDataHas("deliverTo"),
        bodyDataHas("mobileNumber"),
        bodyDataHas("status"),
        bodyDataHas("dishes"),
        create,
    ],

    read: [orderExists, read]
}