const Post = require("../models/Post");
const User = require("../models/User");

exports.postSinglePost = (req, res, next) => {
  User.findOneAndUpdate(req.user, {
    $push: {
      concursos: {
        title,
        author,
        description,
        photoUrl,
        date
      }
    }
  });
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.render("profile", { posts });
    })
    .catch(err => {
      res.render("profile", err);
    });
};
