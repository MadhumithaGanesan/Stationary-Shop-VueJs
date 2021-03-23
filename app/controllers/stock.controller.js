const db = require("../models");
const Stock = db.stock;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request

  // Create a Tutorial
  const stock = {
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  };

  // Save Tutorial in the database
  Stock.create(stock)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stock."
      });
    });
};

exports.findAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    Stock.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving stocks."
        });
      });
  };
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Stock.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Stock with id=" + id
        });
      });
  };
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Stock.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Stock was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Stock with id=${id}. Maybe Stock was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Stock with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Stock.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Stock was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Stock with id=" + id
        });
      });
  };
  
  