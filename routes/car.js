const express = require('express');
const router = express.Router();
const car = require('../controller/carController');

router.get('/', car.list_all_cars).post('/', car.create_car);
router.get('/:carId', car.read_a_car).put('/:carId', car.update_a_car).delete('/:carId', car.delete_a_car);

module.exports = router;
