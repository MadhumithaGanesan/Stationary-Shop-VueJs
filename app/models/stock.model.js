module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("stocks", {
      type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      quantity: {
          type: Sequelize.INTEGER
        }
      });
  
    return Stock;
  };