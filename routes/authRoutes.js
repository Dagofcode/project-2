const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");

router.get("/signup", auth.getSignup);
router.post("/signup", auth.postSignup);

router.post("/login", auth.postLogin);

router.get("/logout", auth.logout);

module.exports = router;
