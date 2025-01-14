//dependencies...
const Router = require("express").Router();
const createItem = require("../Controller/CreateItem");
const getSingleItem = require("../Controller/GetSingleItem");
const updateItem = require("../Controller/UpdateItem");
const getAllItema = require("../Controller/GetAllitem");
const deleteItem = require("../Controller/DeleteItem");


Router.get("/allitems",getAllItema);
Router.get("/singleitem/:id",getSingleItem);
Router.post("/createitem",createItem);
Router.post("/updateitem/:id",updateItem);
Router.delete("/deleteitem/:id",deleteItem);



//Exporting the router....
module.exports = Router;