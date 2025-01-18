//dependencies.....
const {Connection} = require("../Db");

//main function to get single item from table...
const deleteSingleItem = async (req,res)=>{
    const id = req.params.id;
    const Query = `Delete from District_information3 where id = ?`;

    try{
        const [Res] = await Connection.query(Query,[id]);
        if(Res.length === 0){
            res.status(404).json({erMsg:"No data found with this id"});
        }else{
            res.status(200).json({SucMsg:"Data Deleted Successfully",Data:Res});
        }
    }catch(error){
        res.status(403).json({erMsg:"Something went wrong to delete data"+error});
    }
};


//Exporting the module...
module.exports = deleteSingleItem; 