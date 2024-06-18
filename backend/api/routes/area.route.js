const { getAreas } = require("../controllers/area.controller");

const router = require("express").Router();
router.get('/',getAreas)

module.exports = router;
