var express = require('express');
var router = express.Router();
var car = require('../controller/carController');

router.get('/', car.list_all_cars).post('/', car.create_car);
router.get('/:carId', car.read_a_car).put('/:carId', car.update_a_car).delete('/:carId', car.delete_a_car);




module.exports = router;
