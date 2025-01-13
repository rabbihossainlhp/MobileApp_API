//Dependencies...
const mysql = require('mysql2');
require('dotenv').config();


//First Create a connection to the database,
const Connection = mysql.createConnection(
    {
        host:      process.env.Db_Host,
        user:      process.env.Db_User,
        password:  process.env.Db_Password,
        database:  process.env.Db_Name
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