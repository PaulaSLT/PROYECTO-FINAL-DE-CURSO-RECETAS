const router = require("express").Router();

router.use("/auth", require("./auth.route"));

router.use('/area',require('./area.route'))


module.exports = router;