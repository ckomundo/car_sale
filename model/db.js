'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1z2x3c4v5b',
	database: 'car_sale'
});

connection.connect(function(err){
	if(err) throw err;
});

module.exports = connection;
