const express = require("express");
const router = express.Router();
const {
  getProfile,
  createPost,
  getAllUserPosts
} = require("../controllers/profile.controllers");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/", isLoggedIn, getProfile);
router.post("/", createPost);

router.get("/:id", getAllUserPosts);

module.exports = router;
