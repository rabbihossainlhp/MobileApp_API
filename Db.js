//Dependencies...
const mysql = require('mysql2');
require('dotenv').config();


//First Create a connection to the database,
const Connection = mysql.createConnection(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:process.env.DB_PORT
    }
);  

//Let's Connect
Connection.connect((err)=>{
    if(err){
        console.log("Something went wrong to connect with db "+err);
    }
    else{
        console.log("Database Connected Successfully");
    }
});

module.exports = Connection;