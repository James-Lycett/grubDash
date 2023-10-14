# grubDash API
GrubDash is a RESTful API intended to be used by a Door Dash style food delivery service to create, read, update, and list orders made to and dishes offered by the service.

## How TO Use Grubdash API

### https://grubdash-hnp5.onrender.com/
The home page for the API

### https://grubdash-hnp5.onrender.com/dishes
#### - GET 
Will respond with a list of all existing dish data.


#### - POST 
Will save the dish and respond with the newly created dish assigned a unique id.

POST request body must have the following format:
{
  "data": {
    "name": "string",
    "description": "string",
    "price": integer > 0,
    "image_url": "string"
  }
}

Example POST request body:
{
  "data": {
    "name": "Dolcelatte and chickpea spaghetti",
    "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    "price": 19,
    "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  }
}

Response:
Status 201
{
  "data": {
    "id": "d351db2b49b69679504652ea1cf38241",
    "name": "Dolcelatte and chickpea spaghetti",
    "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    "price": 19,
    "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  }
}


### https://grubdash-hnp5.onrender.com/dishes/:dishId
#### - GET
Will respond with the dish where id === :dishId or return 404 if no matching dish is found.

Example GET request:
GET https://grubdash-hnp5.onrender.com/dishes/3c637d011d844ebab1205fef8a7e36ea

Response:
Status 200
{
  "data": {
    "id":"3c637d011d844ebab1205fef8a7e36ea",
    "name":"Broccoli and beetroot stir fry",
    "description":"Crunchy stir fry featuring fresh broccoli and beetroot",
    "price":15,
    "image_url":"https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?h=530&w=350"
  }
}


#### - PUT
Will update the dish where id === :dishId or return 404 if no matching dish is found.

Request body must have the following format:
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "image_url": "string",
    "price": integer > 0
  }
}

Example PUT request:
PUT http://localhost:5000/dishes/3c637d011d844ebab1205fef8a7e36ea

Example PUT request body:
{
  "data": {
    "id": "3c637d011d844ebab1205fef8a7e36ea",
    "name": "Century Eggs",
    "description": "Whole eggs preserved in clay and ash for a few months",
    "image_url": "some-valid-url",
    "price": "17"
  }
}

Response:
Status 200
{
  "data": {
    "id": "3c637d011d844ebab1205fef8a7e36ea",
    "name": "Century Eggs",
    "description": "Whole eggs preserved in clay and ash for a few months",
    "image_url": "some-valid-url",
    "price": "17"
  }
}

### https://grubdash-hnp5.onrender.com/orders
#### - GET
Will respond with a list of all existing order data.

#### - POST
Will save the order and respond with the newly created order.

POST request body must have the following format:
{
  "data": {
    "deliverTo": "string",
    "mobileNumber": "string",
    "status": "string",
    "dishes": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "image_url": "string",
        "price": number,
        "quantity": integer > 0
      }
    ]
  }
}

Example POST request body:
{
  "data": {
    "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
    "mobileNumber": "(505) 143-3369",
    "status": "delivered",
    "dishes": [
      {
        "id": "d351db2b49b69679504652ea1cf38241",
        "name": "Dolcelatte and chickpea spaghetti",
        "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
        "price": 19,
        "quantity": 2
      }
    ]
  }
}

Response:
Status 201
{
  "data": {
    "id": "5a887d326e83d3c5bdcbee398ea32aff",
    "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
    "mobileNumber": "(505) 143-3369",
    "status": "delivered",
    "dishes": [
      {
        "id": "d351db2b49b69679504652ea1cf38241",
        "name": "Dolcelatte and chickpea spaghetti",
        "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
        "price": 19,
        "quantity": 2
      }
    ]
  }
}

### https://grubdash-hnp5.onrender.com/orders/:orderId
#### - GET
Will respond with the order where id === :orderId or return 404 if no matching order is found.

Example GET request:
GET http://localhost:5000/orders/f6069a542257054114138301947672ba

Response: 
Status 200
{
  "data": {
    "id": "f6069a542257054114138301947672ba",
    "deliverTo": "1600 Pennsylvania Avenue NW, Washington, DC 20500",
    "mobileNumber": "(202) 456-1111",
    "status": "out-for-delivery",
    "dishes": [
      {
        "id": "90c3d873684bf381dfab29034b5bba73",
        "name": "Falafel and tahini bagel",
        "description": "A warm bagel filled with falafel and tahini",
        "image_url": "https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
        "price": 6,
        "quantity": 1
      }
    ]
  }
}

#### - PUT
Will update the order where id === :orderId, or return 404 if no matching order is found.

PUT request body must have the following format:
{
  "data": {
    "deliverTo": "string",
    "mobileNumber": "string",
    "status": "string",
    "dishes": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "image_url": "string",
        "price": number,
        "quantity": integer > 0
      }
    ]
  }
}

Example PUT request body:
{
  "data": {
    "deliverTo": "Rick Sanchez (C-132)",
    "mobileNumber": "(202) 456-1111",
    "status": "delivered",
    "dishes": [
      {
        "id": "90c3d873684bf381dfab29034b5bba73",
        "name": "Falafel and tahini bagel",
        "description": "A warm bagel filled with falafel and tahini",
        "image_url": "https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
        "price": 6,
        "quantity": 1
      }
    ]
  }
}

Response:
Status 200
{
  "data": {
    "id": "f6069a542257054114138301947672ba",
    "deliverTo": "Rick Sanchez (C-132)",
    "mobileNumber": "(202) 456-1111",
    "status": "delivered",
    "dishes": [
      {
        "id": "90c3d873684bf381dfab29034b5bba73",
        "name": "Falafel and tahini bagel",
        "description": "A warm bagel filled with falafel and tahini",
        "image_url": "https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
        "price": 6,
        "quantity": 1
      }
    ]
  }
}

#### - DELETE
Will delete the order and return a 204 where id === :orderId, or return 404 if no matching order is found.

Example DELETE request:
DELETE http://localhost:5000/dishes/3c637d011d844ebab1205fef8a7e36ea

Response:
Status 204
*no response body*
