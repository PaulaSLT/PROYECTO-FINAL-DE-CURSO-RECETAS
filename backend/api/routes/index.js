const router = require("express").Router();





router.use("/recipe", require("./recipes.route"));

module.exports = router;