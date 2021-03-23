const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const userid = req.query.userid;
    var condition = userid ? { userid: { [Op.like]: `%${userid}%` } } : null;
  
    Order.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders."
        });
      });
  };

  
exports.create = (req, res) => {
    // Validate request

    
    // Create a Order
    const order = {
      userid: req.body.userid,
      stockid: req.body.stockid,
      quantity: req.body.quantity,
      totalprice: req.body.totalprice,
    };
  
    // Save Order in the database
    Order.create(order)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while making the Order."
        });
      });
  };
    