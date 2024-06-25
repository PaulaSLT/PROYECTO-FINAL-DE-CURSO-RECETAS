const router = require("express").Router();

router.use('/user', require('./user.route'))
router.use("/auth", require("./auth.route"));
router.use('/area',require('./area.route'))
router.use("/recipe", require("./recipes.route"));
router.use('/favourite', require('./favourite.route'))

module.exports = router;