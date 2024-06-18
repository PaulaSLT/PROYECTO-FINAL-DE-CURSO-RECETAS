const router = require("express").Router();

<<<<<<< HEAD
router.use('/user', require('./user.route'))
=======
router.use("/auth", require("./auth.route"));

router.use('/area',require('./area.route'))

>>>>>>> 43c1cfe3a294f6bec15efea1ddaa8a594ec22770

module.exports = router;