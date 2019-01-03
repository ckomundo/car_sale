const express = require('express');
const router = express.Router();
const sale = require('../controller/saleController');

router.get('/', sale.list_all_sale).post('/', sale.create_a_sale);
router.get('/:saleId', sale.read_a_sale);




module.exports = router;