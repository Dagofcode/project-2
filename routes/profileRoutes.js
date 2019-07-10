const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profile.controllers");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/", isLoggedIn, getProfile);

router.get("/:id");

module.exports = router;
