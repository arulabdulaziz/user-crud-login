const route = require("express").Router();
const UsersController = require("../controllers/users");

route.get("/", UsersController.getUserLoggedIn);
route.post("/", UsersController.createUser)
route.post('/login', UsersController.login)
route.get("/users", UsersController.getAllUser);
route.get("/:id", UsersController.getUserById)
route.put("/:id", UsersController.updateUser)
route.delete("/:id", UsersController.removeUser)

module.exports = route;
