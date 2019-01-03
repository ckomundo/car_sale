var express = require('express');
var router = express.Router();
var sale = require('../controller/saleController');

router.get('/', sale.list_all_sale).post('/', sale.create_a_sale);
router.get('/:saleId', sale.read_a_sale);




module.exports = router;