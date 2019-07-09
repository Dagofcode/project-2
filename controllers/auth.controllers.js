const User = require("../models/Users");
const passport = require("passport");

exports.getSignup = (req, res, next) => {
  res.render("auth/signup");
};

exports.postSignup = async (req, res) => {
  const user = await User.register({ ...req.body }, req.body.password);
  res.redirect("/auth/login");
};
exports.getLogin = (req, res, next) => {
  res.render("auth/login");
};

exports.postLogin = passport.authenticate("local", {
  failureRedirect: "/login",
  successRedirect: "/profile"
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};

exports.getProfile = (req, res, next) => {
  res.rendeR("auth/profile", { user: req.user });
};
