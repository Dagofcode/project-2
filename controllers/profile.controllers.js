const Post = require("../models/Post");

exports.getProfile = (req, res, next) => {
  if (req.user.role === "User") res.render("profile", { user: req.user });
  else if (req.user.role === "Company") {
    res.render("profiles/company-profile", { user: req.user });
  }
};

exports.getPost = (req, res, next) => {
  Post.create({ ...req.body })
    .then(post => {
      console.log("POST CREATED");
      res.render("profiles/company-profile");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.render("viewAll", { posts });
    })
    .catch(err => {
      res.render("viewAll", err);
    });
};
exports.getSinglePost = (req, res, next) => {
  console.log(req.params.id);
  Post.findById(req.params.id)
    .then(post => {
      console.log(post);
      res.render("view-single", post);
    })
    .catch(err => {
      console.log(err);
    });
};
