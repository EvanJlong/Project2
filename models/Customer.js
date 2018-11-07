module.exports = function(sequelize, DataTypes) {
    const Customers = sequelize.define('Customers', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      },
      zipCode: {
        type: DataTypes.INTEGER
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  
    return Customers;
  }