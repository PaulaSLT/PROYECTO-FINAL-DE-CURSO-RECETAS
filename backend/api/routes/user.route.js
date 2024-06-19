const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getMyProfile,
} = require("../controllers/user.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

router.get("/", getAllUsers);
router.get('/myprofile', checkAuth , getMyProfile)
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;