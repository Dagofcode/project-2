const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost
} = require("../controllers/profile.controllers");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/viewAll", getAllPosts);
router.get("/view-single/:id", getSinglePost);

module.exports = router;
