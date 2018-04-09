var mysql = require("mysql");

var connection = mysql.createConnection
(
    {
        host: "127.0.0.1",
        port: 3307,
        database: "fashion",
        user: "root",
        password: "usbw",
    }
);

connection.on('error', err => console.log(err))

module.exports = connection;