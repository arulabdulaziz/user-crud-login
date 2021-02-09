const { User } = require("../models/index");
const Bcrypt = require("../helper/bcrypt");
const Jwt = require("../helper/webtoken");

class UsersController {
  static getDataUserLoggedIn(req, res, next) {
    res.send(req.loggedInUser);
  }
  static async createUser(req, res, next) {
    try {
      const payload = {
        username: req.body.username,
        password: req.body.password,
        role: "user",
      };
      const user = await User.create(payload);
      res.status(201).json({ username: user.username, role: user.role });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (user && Bcrypt.compare(password, user.password)) {
        const token = Jwt.Sign(user.dataValues);
        res.status(200).json({ access_token: token });
      } else {
        res.status(400).json({ message: "username or password invalid" });
      }
    } catch (error) {
      next(error);
    }
  }
  static async updateUser(req, res, next) {
    try {
      const id = +req.params.id;
      const user = await User.findByPk(id);
      if (!user)
        res.status(404).json({ message: "Cannot Find User To Update" });
      const payload = {
        username: req.body.username,
        password: req.body.password,
      };
      const updatedUser = await User.update(payload, {
        where: { id },
        individualHooks: true,
        returning: true,
      });
      res.status(200).json(updatedUser[1][0]);
    } catch (error) {
      next(error);
    }
  }
  static async removeUser(req, res, next) {
    try {
      const id = +req.params.id;
      const user = await User.findByPk(id);
      if (!user)
        res.status(404).json({ message: "Cannot Find User To Delete" });
      await User.destroy({ where: { id } });
      res.status(200).json({ message: "Success To Deleted" });
    } catch (error) {
      next(error);
    }
  }
  static async getAllUsers(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  static async getUserById(req, res, next){
    try {
        const id = +req.params.id
        const user = await User.findByPk(id)
        if (!user)
        res.status(404).json({ message: "Cannot Find User To Read Detail" });
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
  }
}
module.exports = UsersController;
