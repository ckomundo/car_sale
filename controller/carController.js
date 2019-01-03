'use-strict';

var Car = require ('../model/carModel');

exports.list_all_cars = function (req, res){
	Car.getAllCar(function(err, car){
		console.log('List All Cars');
		if(err)
			res.send(err);
			console.log('rest', car);
		res.send(car);
	});
};

exports.create_car = function(req, res){
	var new_car = new Car(req.body);

	if(!new_car.model || !new_car.brand || !new_car.colour || !new_car.status){
		res.status(400).send({
			error: true,
			message: "Please provide model/brand/colour/status"
		});
	}else{
		Car.createCar(new_car, function(err, car){
			if(err)
				res.send(err);
			res.json(car);
		});
	}
};

exports.read_a_car = function(req, res){
	Car.getCarById(req.params.carId, function(err, car){
		if(err)
			res.send(err);
		res.json(car)
	});
};

exports.update_a_car = function(req, res){
	Car.updateCarById(req.params.carId, new Car(req.body), function(err, car){
		if(err)
			res.send(err)
		res.json(car);
	});
};

exports.delete_a_car = function(req, res){
	Car.removeCarById(req.params.carId, function(err, car){
		if(err)
			res.send(err)
		res.json('Car successfully deleted');
	});
};