const mysql = require ('mysql');
const {promisify} = require('util'); // Dar soporte a callbacks, promisify, async and await
const {database} =  require('./keys.js'); //const {database} solo se importa {database}

const pool = mysql.createPool(database);

pool.getConnection((err,conn) => {
    if (err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log("DATABASE WAS CLOSED");
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log("DATABASE WAS TO MANY CONNECTIONS");
        }
        if(err.code === 'ECONNREFUSED'){
            console.log("DATABASE CONNECTION REFUSED");
        }

    }

    if (conn) conn.release();
    console.log("DATABASE IS CONNECTED");
    return;
    
});

pool.query = promisify(pool.query);
module.exports = pool;