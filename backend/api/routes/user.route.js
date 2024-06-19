const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
