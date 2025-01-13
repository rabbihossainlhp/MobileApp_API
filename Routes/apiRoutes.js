//dependencies...
const Router = require("express").Router();
const RouteController = require("../Controller/routeController");


Router.get("/allitems",);
Router.get("/singleitem/:id",);
Router.post("/createitem",RouteController.createItem);
Router.post("/updateitem/:id",);
Router.delete("/deleteitem/:id",);



//Exporting the router....
module.exports = Router;