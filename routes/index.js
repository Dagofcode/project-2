const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth");
const {
  getAllPosts,
  getSinglePost
} = require("../controllers/profile.controllers");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { user: req.user });
});
router.get("/viewAll", getAllPosts);
router.get("/view-single/:id", getSinglePost);

module.exports = router;
