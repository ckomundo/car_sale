'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'GeeckoServer',
	database: 'car_sale'
});

connection.connect(function(err){
	if(err) throw err;
});

module.exports = connection;
