"use strict";
const Bcrypt = require("../helper/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Username Required!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Password Required!",
          },
          len: {
            args: [3, 100],
            msg: "Password min 3 characters",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        isIn: {
          args: [["admin", "user"]],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance, option) => {
    instance.password = Bcrypt.hash(instance.password);
  });
  User.beforeUpdate((instance, option) => {
    instance.password = Bcrypt.hash(instance.password);
  });
  return User;
};
