const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// bcrypt = require('bcrypt');

class User extends Model {}


// define table columns and configuration
User.init(
  {
    // defining a column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // checks if its in a email format
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },

  {
    // hooks config


    // our connect
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,

    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;


