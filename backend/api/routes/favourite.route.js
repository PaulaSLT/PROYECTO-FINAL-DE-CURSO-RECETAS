const { getMyFavorites } = require("../controllers/favorites.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");
const router = require("express").Router();

router.get('/', checkAuth,  getMyFavorites)


module.exports = router