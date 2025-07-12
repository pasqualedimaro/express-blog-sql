// connetto il mio db
const mysql = require('mysql');
 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'blogschema' 
 })

 // errore

 connection.connect((err) => {
     if (err) throw err;
     console.log('connesso al mio server mysql');
 });

 //esporto
 module.exports = connection;

































