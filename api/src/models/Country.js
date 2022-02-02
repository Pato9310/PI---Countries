const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.
module.exports = (sequelize) => {
  // Model definition
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    poblation: {
      type: DataTypes.INTEGER,
    }
  });
};
