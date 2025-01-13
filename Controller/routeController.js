//dependencies.....
const db = require("../Db");

//Module Scuffholder 
const RouteController = {};


//First Create a items into db...
RouteController.createItem = (req,res)=>{
    const {name,description} = req.body;
    const Query = `Insert into District_information(name,description) Values(?,?)`;

    //apply the query to store info....
    db.query(Query,[name,description],(error,result)=>{
        if(error){
            res.status(500).json({message:"Something went wrong to store the data",error:error});
        }else{
            res.status(201).json({message:"Your data has been stored successfully",result:result.id ,name,description });
        }
    });
};



//Exporting the moduel...
module.exports = RouteController;