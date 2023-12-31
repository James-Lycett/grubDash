const path = require("path");

// use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// function to assign ids when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass


// gets all dishes-data
function list(req, res, next) {
    res.json({ data: dishes})
}

// validates post request body has correct data format
function bodyDataHas(propertyName) {
    return function (req, res, next) {
        const { data = {} } = req.body

        if (data[propertyName]) {
            return next()
        } else {
            return next({ 
                status: 400, 
                message: `Dish must include a ${propertyName}` 
            })
        }
    }
}

// checks if request price is an integer greater than 0
function validatePriceIsPositiveInteger(req, res, next) {
    const { data: { price } = {} } = req.body

    if (!Number.isInteger(price) || Number(price) <= 0) {
        return next({
            status: 400,
            message: `Dish must have a price that is an integer greater than 0`
        })
    } else {
        return next()
    }
}


// posts a new dish to dishes-data
function create(req, res, next) {
    const { data: { name, description, price, image_url } = {} } = req.body

    const newDish = {
        id: nextId(),
        name: name,
        description: description,
        price: price,
        image_url: image_url,
    }

    dishes.push(newDish)

    res.status(201).json({ data: newDish })
}


// validates dish with given id exists in dishes-data
function dishExists(req, res, next) {
    const { dishId } = req.params

    const foundDish = dishes.find((dish) => dish.id === dishId)

    if (!foundDish) {
        next({
            status: 404,
            message: `Dish ${dishId} not found..`
        })        
    } else {
        res.locals.dish = foundDish
        return next()
    }
}

// gets a single dish (by id)from dishes-data 
function read(req, res, next) {
    res.json({ data: res.locals.dish })
}

// validates req.body dishId matches req.param dishId
function validateIdMatches(req, res, next) {
    const { data: { id } = {} } = req.body
    const { dishId } = req.params

    if (id && id !== dishId) {
        return next({
            status: 400,
            message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`
        })
    } else {
        return next()
    }
}

// puts an update in a single dish from dishes-data
function update(req, res, next) {
    const { data: { name, description, price, image_url } = {} } = req.body
    const dish = res.locals.dish

    dish.name = name
    dish.description = description
    dish.price = price
    dish.image_url = image_url
    
    res.json({ data: dish })
}




module.exports = {

    list, 

    create: [
        bodyDataHas("name"),
        bodyDataHas("description"),
        bodyDataHas("price"),
        bodyDataHas("image_url"),
        validatePriceIsPositiveInteger,
        create,
    ],

    read: [dishExists, read],

    update: [
        dishExists,
        validateIdMatches,
        bodyDataHas("name"),
        bodyDataHas("description"),
        bodyDataHas("price"),
        bodyDataHas("image_url"),
        validatePriceIsPositiveInteger,
        update,
    ],

}