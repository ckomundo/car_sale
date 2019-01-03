'user strict';
const sql = require('./db.js');

//Sale object constructor
const Sale = function(sale){
  this.car_id = sale.car_id;
  this.customer = sale.customer;
  this.price = sale.price;
  this.status = sale.status;
  this.create_at = new Date();
};

Sale.createSale = function createSale(newSale, result){
  sql.query("INSERT INTO sale set ?", newSale, function(err, res){
    if(err){
      console.log("error:", err);
      result(err, null);
    }else{
      console.log(res.insertId);
      result(null, res.insertId)
    }
  });
}
Sale.getSaleById = function getSaleById(saleId, result){
  sql.query("SELECT sale.car_id, sale.customer, sale.price, sale.status, sale.create_at FROM sale INNER JOIN car ON sale.car_id = car.car_id WHERE sale_id = ? ", saleId, function(err, res){
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
}

Sale.getAllSale = function getAllSale(result){
  sql.query("SELECT sale.car_id, sale.customer, sale.price, sale.status, sale.create_at FROM sale INNER JOIN car ON sale.car_id = car.car_id", function(err, res){
    if(err){
      console.log("error:", err);
      result(null, err);
    }else{
      console.log("sale:", res);
      result(null, res)
    }
  });
}

module.exports = Sale;
