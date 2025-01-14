//dependencies.....
const db = require("../Db");

//main function to get single item from table...
const getAllItem = (req,res)=>{
    const Query = `Select * from District_information3`;

    db.query(Query,(error, result)=>{
        if(error){
            res.status(404).json({erMsg:"any information not found"});
        }else{
            res.status(200).json({SuccessMsg:"Sucessfully founded all information",result:result});
        }
    });
};

//Exporting the module...
module.exports = getAllItem;; 