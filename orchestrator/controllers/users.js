const axios = require("axios");
const url = "http://localhost:3001/";
class UsersController {
  static async getUserLoggedIn(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: url,
        headers: {
          access_token: req.headers.access_token
            ? req.headers.access_token
            : "",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error.response);
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async getAllUser(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${url}users`,
        headers: {
          access_token: req.headers.access_token
            ? req.headers.access_token
            : "",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async getUserById(req, res, next) {
    try {
      const id = +req.params.id;
      const {data}  = await axios({
        method: "GET",
        url: `${url}${id}`,
        headers: {
          access_token: req.headers.access_token
            ? req.headers.access_token
            : "",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async createUser(req, res, next) {
    try {
      const payload = {
        username: req.body.username,
        password: req.body.password,
      };
      const { data } = await axios({
        method: "POST",
        url: url,
        headers: {
          access_token: req.headers.access_token
            ? req.headers.access_token
            : "",
        },
        data: payload,
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async updateUser(req, res, next) {
    try {
      const id = +req.params.id;
      const payload = {
        username: req.body.username,
        password: req.body.password,
      };
      const { data } = await axios({
        method: "PUT",
        url: `${url}${id}`,
        headers: {
          access_token: req.headers.access_token
            ? req.headers.access_token
            : "",
        },
        data: payload,
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async removeUser(req, res, next) {
    try {
      const id = +req.params.id;
      const { data } = await axios({
        method: "DELETE",
        url: `${url}${id}`,
        headers: {
          access_token: req.headers.access_token
            ? req.headers.access_token
            : "",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async login(req, res, next) {
    try {
      const payload = {
        username: req.body.username,
        password: req.body.password,
      };
      const { data } = await axios({
        method: "POST",
        url: `${url}login`,
        data: payload,
      });
      res.status(200).json(data)
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
}
module.exports = UsersController;
