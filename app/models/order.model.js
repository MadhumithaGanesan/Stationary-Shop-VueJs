const db = require("../models");
const Users = db.user;
const Stock = db.stock;


module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
      userid: {
        type: Sequelize.INTEGER,  
      },
      stockid: {
        type: Sequelize.INTEGER,

      },
      quantity: {
          type: Sequelize.INTEGER
        },
      totalprice: {
        type: Sequelize.INTEGER
      }
    });

    return Orders;
  };