const router = require("express").Router();
const usersRoute = require('./usersRoute')

router.use('/', usersRoute)

module.exports = router;
