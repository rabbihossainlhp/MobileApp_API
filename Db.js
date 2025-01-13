//Dependencies...
const mysql = require('mysql2');

//First Create a connection to the database,
const Connection = mysql.createConnection(
    {
        host:"localhost",
        user:"rabbi",
        password:"123ASDasd@&",
        database:"District_Info"
    }
);  

//Let's Connect
Connection.connect((err)=>{
    if(err){
        console.log("Something went wrong to connect with db"+err);
    }
    else{
        console.log("Database Connected Successfully");
    }
});

module.exports = Connection;