const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getMyProfile,
} = require("../controllers/user.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

router.get("/", checkAuth, getAllUsers);
router.get('/myprofile', checkAuth , getMyProfile)
router.get("/:id", checkAuth, getOneUser);
router.post("/", createUser);
router.put("/:id", checkAuth, updateUser);
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;