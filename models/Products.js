module.exports = function(sequelize, DataTypes) {
    const Panels = sequelize.define('Panels', {
      brand_Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      panel_Name: {
        type: DataTypes.STRING
      },
      avg_Efficiency: {
        type: DataTypes.DECIMAL
      },
      watts: {
        type: DataTypes.STRING
      },
      warranty_Yrs: {
        type: DataTypes.INTEGER
      },
      inventory:{
        type:DataTypes.INTEGER
      }
    });
    return Panels;
  }