//dependencies.....
const db = require("../Db");

//main function to get single item from table...
const getSingleItem = (req,res)=>{
    const id = req.params.id;
    const Query = `Select * from District_Information where id = ?`;

    db.query(Query,[id],(error, result)=>{
        if(error){
            res.status(404).json({erMsg:"Not found the information"});
        }else{
            res.status(200).json({SuccessMsg:"Sucessfully founded the information",result:result});
        }
    });
};

//Exporting the module...
module.exports = getSingleItem;