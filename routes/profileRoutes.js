const express = require("express");
const router = express.Router();
const { getProfile, getPost } = require("../controllers/profile.controllers");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/", isLoggedIn, getProfile);
router.post("/", getPost);

router.get("/:id");

module.exports = router;
