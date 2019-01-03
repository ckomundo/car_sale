'use strict';

const Sale = require('../model/saleModel.js');

exports.list_all_sale = function(req, res) {
	Sale.getAllSale(function(err, sale){
		console.log('controller');
		if(err)
			res.send(err);
			console.log('res', sale);
		res.send(sale);	

	});
};

exports.create_a_sale = function(req, res){
	const new_sale = new Sale(req.body);
	if(!new_sale.car_id || !new_sale.customer || !new_sale.price  || !new_sale.status){
		res.status(4000).send({
			error: true,
			message: 'Please provider car id/customer/price/status'
		});
	}else{
		Sale.createSale(new_sale, function(err, sale){
			if (err)
				res.sed(err);
			res.json(sale);

		});
	}
};

exports.read_a_sale = function(req, res) {
	Sale.getSaleById(req.params.saleId, function(err, sale){
		if(err)
			res.send(err);
		res.json(sale);
	});
};