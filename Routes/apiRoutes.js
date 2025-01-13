//dependencies...
const Router = require("express").Router();
const createItem = require("../Controller/CreateItem");
const getSingleItem = require("../Controller/GetSingleItem");
const updateItem = require("../Controller/UpdateItem");


Router.get("/allitems",);
Router.get("/singleitem/:id",getSingleItem);
Router.post("/createitem",createItem);
Router.post("/updateitem/:id",updateItem);
Router.delete("/deleteitem/:id",);



//Exporting the router....
module.exports = Router;