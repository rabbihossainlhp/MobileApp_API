//dependencies.....
const db = require("../Db");


//main function to update single item from table...
const updateItem = (req,res)=>{

    const Query = `Update District_information2 set name = ?, description = ? where id  = ?`;
    const {id} = req.params;
    const {name,description} = req.body;
    
    db.query(Query,[name,description,id],(error,result)=>{
        if(error){
            res.status(403).json({errMsg:"Something is going wrong to update info",error:error});
        }else{
            res.status(201).json({SuccessMsg:"your data has been updated successfully",result:result});
        }
    });
}

//export 
module.exports = updateItem;