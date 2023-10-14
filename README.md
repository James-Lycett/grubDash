# grubDash API
GrubDash is a RESTful API intended to be used by a Door Dash style food delivery service to create, read, update, and list orders made to and dishes offered by the service.

## How TO Use Grubdash API

### grubdash-hnp5.onrender.com/
The home page for the API

### grubdash-hnp5.onrender.com/dishes
#### - GET 
Will respond with a list of all existing dish data.


#### - POST 
Will save the dish and respond with the newly created dish assigned a unique id.

POST request body must have the following format:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price": integer > 0,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "string"
  <br>&nbsp;&nbsp;}
<br>}

Example POST request body:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "Dolcelatte and chickpea spaghetti",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price": 19,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  <br>&nbsp;&nbsp;}
<br>}

Response:
Status 201
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "d351db2b49b69679504652ea1cf38241",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "Dolcelatte and chickpea spaghetti",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price": 19,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  <br>&nbsp;&nbsp;}
<br>}


### grubdash-hnp5.onrender.com/dishes/:dishId
#### - GET
Will respond with the dish where id === :dishId or return 404 if no matching dish is found.

Example GET request:
<br>GET ht<span>tps://</span>grubdash-hnp5.onrender.com/dishes/3c637d011d844ebab1205fef8a7e36ea

Response:
<br>Status 200
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id":"3c637d011d844ebab1205fef8a7e36ea",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name":"Broccoli and beetroot stir fry",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description":"Crunchy stir fry featuring fresh broccoli and beetroot",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price":15,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url":"ht<span>tps://</span>images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?h=530&w=350"
  <br>&nbsp;&nbsp;}
<br>}


#### - PUT
Will update the dish where id === :dishId or return 404 if no matching dish is found.

Request body must have the following format:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price": integer > 0
  <br>&nbsp;&nbsp;}
<br>}
<br>
<br>PUT request body can optionally include the dish id, but the id MUST match the url dishId

Example PUT request:
<br>PUT ht<span>tps://</span>grubdash-hnp5.onrender.com/dishes/3c637d011d844ebab1205fef8a7e36ea

Example PUT request body:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "3c637d011d844ebab1205fef8a7e36ea",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "Century Eggs",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description": "Whole eggs preserved in clay and ash for a few months",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "some-valid-url",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price": "17"
  <br>&nbsp;&nbsp;}
<br>}


Response:
<br>Status 200
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "3c637d011d844ebab1205fef8a7e36ea",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "Century Eggs",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"description": "Whole eggs preserved in clay and ash for a few months",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "some-valid-url",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"price": "17"
  <br>&nbsp;&nbsp;}
<br>}

### grubdash-hnp5.onrender.com/orders
#### - GET
Will respond with a list of all existing order data.

#### - POST
Will save the order and respond with the newly created order.

POST request body must have the following format:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": number,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": integer > 0
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;&nbsp;&nbsp;]
  <br>&nbsp;&nbsp;}
<br>}

Example POST request body:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "(505) 143-3369",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "delivered",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "d351db2b49b69679504652ea1cf38241",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Dolcelatte and chickpea spaghetti",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": 19,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 2
      <br>&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;]
  <br>}
<br>}

Response:
<br>Status 201
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "5a887d326e83d3c5bdcbee398ea32aff",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "(505) 143-3369",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "delivered",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "d351db2b49b69679504652ea1cf38241",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Dolcelatte and chickpea spaghetti",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": 19,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 2
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;&nbsp;&nbsp;]
  <br>&nbsp;&nbsp;}
<br>}

### grubdash-hnp5.onrender.com/orders/:orderId
#### - GET
Will respond with the order where id === :orderId or return 404 if no matching order is found.

Example GET request:
<br>GET grubdash-hnp5.onrender.com/orders/f6069a542257054114138301947672ba

Response: 
<br>Status 200
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "f6069a542257054114138301947672ba",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "1600 Pennsylvania Avenue NW, Washington, DC 20500",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "(202) 456-1111",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "out-for-delivery",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "90c3d873684bf381dfab29034b5bba73",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Falafel and tahini bagel",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "A warm bagel filled with falafel and tahini",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": 6,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 1
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;&nbsp;&nbsp;]
  <br>&nbsp;&nbsp;}
<br>}

#### - PUT
Will update the order where id === :orderId, or return 404 if no matching order is found.

PUT request body must have the following format:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "string",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "string",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": number,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": integer > 0
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;&nbsp;&nbsp;]
  <br>&nbsp;&nbsp;}
<br>}
<br>
<br>PUT request body can optionally include the order id, but the id MUST match the url orderId

Example PUT request:
<br>PUT grubdash-hnp5.onrender.com/orders/f6069a542257054114138301947672ba


Example PUT request body:
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "Rick Sanchez (C-132)",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "(202) 456-1111",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "delivered",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "90c3d873684bf381dfab29034b5bba73",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Falafel and tahini bagel",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "A warm bagel filled with falafel and tahini",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": 6,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 1
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;&nbsp;&nbsp;]
  <br>&nbsp;&nbsp;}
<br>}

Response:
<br>Status 200
<br>{
  <br>&nbsp;&nbsp;"data": {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"id": "f6069a542257054114138301947672ba",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"deliverTo": "Rick Sanchez (C-132)",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"mobileNumber": "(202) 456-1111",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"status": "delivered",
    <br>&nbsp;&nbsp;&nbsp;&nbsp;"dishes": [
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "90c3d873684bf381dfab29034b5bba73",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Falafel and tahini bagel",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "A warm bagel filled with falafel and tahini",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "ht<span>tps://</span>images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": 6,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 1
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;&nbsp;&nbsp;]
  <br>&nbsp;&nbsp;}
}

#### - DELETE
Will delete the order and return a 204 where id === :orderId, or return 404 if no matching order is found.

Example DELETE request:
<br>DELETE ht<span>tps://</span>grubdash-hnp5.onrender.com/orders/3c637d011d844ebab1205fef8a7e36ea

Response:
<br>Status 204
<br>*no response body*
