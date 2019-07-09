const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/auth.controllers");
const { isLoggedIn } = require("../middlewares/auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/viewAll", (req, res, next) => {
  res.render("viewAll");
});
router.get("/view-single", (req, res, next) => {
  res.render("view-single");
});
router.get("/profile", isLoggedIn, getProfile);

module.exports = router;
