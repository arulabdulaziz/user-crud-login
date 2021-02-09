const route = require("express").Router();
const UsersController = require("../controllers/users");
const Auth = require("../middlewares/auth");

route.post("/login", UsersController.login);
route.use(Auth.authentication);
route.get("/", UsersController.getDataUserLoggedIn);
route.use(Auth.authenticationAdmin);
route.post("/", UsersController.createUser);
route.get("/users", UsersController.getAllUsers);
route.get("/:id", UsersController.getUserById);
route.put("/:id", UsersController.updateUser);
route.delete("/:id", UsersController.removeUser);

module.exports = route;
