var mysql = require('promise-mysql');
var connection;

var theConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todoapp'
}).then(function (conn) {
    console.log('Inside connectionDB...')
    return connection = conn;
}).catch((error) => {
    console.log('Unable to connect...' + error);
});

module.exports.theConn = theConn;