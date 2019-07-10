exports.getProfile = (req, res, next) => {
  if (req.user.role === "User") res.render("profile", { user: req.user });
  else if (req.user.role === "Company") {
    res.render("profiles/company-profile", { user: req.user });
  }
};
