const { User } = require("../models/index");
const Jwt = require("../helper/webtoken");

class Auth {
  static async authentication(req, res, next) {
    try {
      const token = req.headers.access_token;
      if (!token) res.status(401).json({ message: "You Must Login First" });
      req.loggedInUser = Jwt.Verify(token);
      const user = await User.findByPk(req.loggedInUser.id);
      if (!user) res.status(404).json({ message: "User Not Found" });
      next();
    } catch (error) {
      next(error);
    }
  }
  static authenticationAdmin(req, res, next) {
    if (req.loggedInUser.role !== "admin")
      res.status(403).json({ message: "You Not Admin" });
    next();
  }
}
module.exports = Auth;
