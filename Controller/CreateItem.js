//dependencies.....
const {Connection} = require("../Db");


//First Create a items into db...
const createItem = async (req,res)=>{
    const {name,description} = req.body;
    const Query = `Insert into District_information3(name,description) Values(?,?)`;

    //apply the query to store info....
    try{
        const [Res] = await Connection.query(Query,[name,description]);
        res.status(201).json({SucMsg:"Data Created Successfully",Data:Res});
    }catch(error){
        res.status(403).json({erMsg:"Something went wrong to create data"+error});
    }

};



//Exporting the moduel...
module.exports = createItem;