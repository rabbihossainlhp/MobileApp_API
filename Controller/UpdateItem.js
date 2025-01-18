//dependencies.....
const {Connection} = require("../Db");


//main function to update single item from table...
const updateItem = async (req,res)=>{

    const Query = `Update District_information3 set name = ?, description = ? where id  = ?`;
    const {id} = req.params;
    const {name,description} = req.body;
    
    try{
        const [Res] = await Connection.query(Query,[name,description,id]);
        res.status(201).json({SucMsg:"Data Updated Successfully",Data:Res});
    }catch(error){
        res.status(403).json({errMsg:"Something is going wrong to update info",error:error});
    }
}

//export 
module.exports = updateItem;