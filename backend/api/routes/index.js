const router = require("express").Router();

router.use('/user', require('./user.route'))

module.exports = router;