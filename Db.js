//Dependencies...
const mysql = require('mysql2/promise');
require('dotenv').config();


//First Create a connection to the database,
const Connection = mysql.createPool(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:process.env.DB_PORT,
        waitForConnections:true,
        connectionLimit:10,
        queueLimit:0
    }
);  

//Let's check the connection Connection
const testConnection = async()=>{
    try{
        const connection = await Connection.getConnection();
        console.log("Database connected successfully");
        connection.release();
    }catch(err){
        console.log("Database connection failed  "+err);
    }
}


module.exports = {Connection,testConnection};