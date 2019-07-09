const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const { catchErrors } = require("../middlewares/handlers");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/signup", auth.getSignup);
router.post("/signup", auth.postSignup);

router.get("/login", auth.getLogin);
router.post("/login", auth.postLogin);

router.get("/profile", isLoggedIn, auth.getProfile);

router.get("/logout", auth.logout);

module.exports = router;
