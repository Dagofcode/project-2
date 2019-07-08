const User = require("../models/Users");

exports.getSignup = (req, res, next) => {
  res.render("auth/signup");
};

exports.postSignup = async (req, res) => {
  const { username, password } = req.body;
  await User.register(new User({ username }), password);
  res.redirect("/auth/login");
};
exports.getLogin = (req, res, next) => {
  res.render("auth/login");
};

exports.postLogin = (req, res) => {
  res.redirect("/profile");
};
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
