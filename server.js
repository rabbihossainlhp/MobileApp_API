//Dependencies.....
const express = require('express');
const apiRoutes = require("./Routes/apiRoutes");
const bodyParser = require("body-parser");


//Main app 
const app = express();
app.use(express.json());
app.use(bodyParser.json());



//Handle the basic routes
app.get("/",(req,res)=>{
    res.send("Welcome to the api's home");
});

app.use("/api",apiRoutes);


//Port
const Port = 3535;

//Listent the server....
app.listen(Port,()=>console.log('Serever is runnin on  http://localhost:'+Port));