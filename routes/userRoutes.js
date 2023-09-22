const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.registerUser);
router.get("/", userController.getUsers);

module.exports = router;
