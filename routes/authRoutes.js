const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const passport = require("../middlewares/passport");

router.get("/signup", auth.getSignup);
router.post("/signup", auth.postSignup);
router.get("/login", auth.getLogin);
router.post("/login", passport.authenticate("local"), auth.postLogin);
router.get("/logout", auth.logout);

module.exports = router;
