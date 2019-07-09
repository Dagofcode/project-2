const express = require("express");
const router = express.Router();

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

module.exports = router;
