//dependencies.....
const {Connection} = require("../Db");

//main function to get single item from table...
const getSingleItem = async (req,res)=>{
    const id = req.params.id;
    const Query = `Select * from District_information3 where id = ?`;

    try {
        const [Res] = await Connection.query(Query,[id]);
        if(Res.length === 0){
            res.status(404).json({errMsg:"No data found with this id"});
        }
        else{
            res.status(201).json({SucMsg:"Data Found Successfully",Data:Res});
        }
    } catch (error) {
        res.status().json({erMsg:"Something went wrong to get single data"+error});
    }
};

//Exporting the module...
module.exports = getSingleItem;