'use strict';

var sql = require('./db.js');

var Car = function(car){
	this.model = car.model;
	this.brand = car.brand;
	this.colour = car.colour;
	this.doors = car.doors;
	this.price = car.price;
	this.ammount = car.ammount;
	this.status = car.status;
	this.created_at = new Date();
	this.modified_at = new Date();
}

Car.createCar = function createCar(newCar,result){
	var query = "INSERT INTO car SET ?";
	sql.query(query,newCar, function(err, res){
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		}else{
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};

Car.getCarById = function getCarById(carId, result){
	var query = "SELECT model,brand,color,doors,price,ammount FROM car where car_id = ?";
	sql.query(query, carId, function(err,res){
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		}else{
			result(null, res);
		}
	});
};

Car.getAllCar = function getAllCar(result){
	var query = "SELECT * FROM car";
	sql.query(query, function(err,res){
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		}else{
			result(null, res);
		}
	});
};

Car.updateCarById = function updateCarById(id, car, result){
	var query = "UPDATE "+
					"`car`"*
				" SET "+
					"`model`= ?,`brand`= ?,`color`= ?,`doors`= ?,`price`= ?,`ammount` = ?"+
				"WHERE "+
					" `car_id` = ?";
	sql.query(query, [car.model, car.brand, car.colour, car.doors, car.price, car.ammount, id], function(err,res){
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		}else{
			result(null, res);
		}
	});
};

Car.removeCarById = function removeCarById(id, result){
	var query = "DELETE FROM car WHERE car_id = ?";
	sql.query(query, [id], function(err,res){
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		}else{
			result(null, res);
		}
	});
};

module.exports = Car;