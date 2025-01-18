//dependencies.....
const {Connection} = require("../Db");

//main function to get single item from table...
const getAllItem = async (req,res)=>{
    const Query = `Select * from District_information3`;
    try{
        const [Res] = await Connection.query(Query);
        if(Res.length=== 0){
            res.status(404).json({erMsg:"any information not found"});
        }else{
            res.status(200).json({SuccessMsg:"Sucessfully founded all information",result:Res});
        }
    }catch(error){
        res.status(403).json({erMsg:"Something went wrong to get all data"+error});
    }
};

//Exporting the module...
module.exports = getAllItem;; 