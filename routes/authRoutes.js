const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const passport = require("../middlewares/passport");
const { catchErrors } = require("../middlewares/handlers");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/signup", auth.getSignup);
router.post("/signup", catchErrors(auth.postSignup));

router.get("/login", auth.getLogin);
router.post("/login", auth.postLogin);

router.get("/logout", auth.logout);

router.get("/profile", isLoggedIn, auth.getProfile);
module.exports = router;
