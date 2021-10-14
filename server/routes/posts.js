const express = require("express");
const authCheck = require("../config/auth-check");
const Post = require("../models/Post");
const User = require("../models/User");
const router = new express.Router();

router.post("/submit", authCheck, (req, res) => {
  const { postText } = req.body;
  let PostObj = {
    creator: req.user._id,
    username: req.user.username,
    level: req.user.level,
    likes: [req.user.username],
    PostText: postText,
  };

  Post.create(PostObj)
    .then((createdPost) => {
      res.status(200).json({
        success: true,
        message: "Post created successfully.",
        data: createdPost,
      });
    })
    .catch((err) => {
      console.log(err);
      const message = "Something went wrong :(";
      return res.status(200).json({
        success: false,
        message: message,
      });
    });
});

router.get("/userlevel", authCheck, (req, res) => {
  res.send({ level: req.user.level });
});
router.get("/allposts", authCheck, (req, res) => {
  Post.find({}).then((posts) => {
    res.status(200).json(posts);
  });
});

router.get("/userposts", authCheck, (req, res) => {
  Post.find({ creator: req.user }).then((posts) => {
    res.status(200).json(posts);
  });
});

router.post("/like/:id", authCheck, (req, res) => {
  const id = req.params.id;
  const username = req.user.username;
  Post.findById(id)
    .then((post) => {
      if (!post) {
        const message = "Product not found.";
        return res.status(200).json({
          success: false,
          message: message,
        });
      }

      let likes = post.likes;
      if (!likes.includes(username)) {
        likes.push(username);
      }
      post.likes = likes;
      post
        .save()
        .then((post) => {
          res.status(200).json({
            success: true,
            message: "Post liked successfully.",
            data: post,
          });
        })
        .catch((err) => {
          console.log(err);
          const message = "Something went wrong :(";
          return res.status(200).json({
            success: false,
            message: message,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      const message = "Something went wrong :(";
      return res.status(200).json({
        success: false,
        message: message,
      });
    });
});
router.post("/unlike/:id", authCheck, (req, res) => {
  const id = req.params.id;
  const username = req.user.username;
  Post.findById(id)
    .then((post) => {
      if (!post) {
        let message = "Post not found.";
        return res.status(200).json({
          success: false,
          message: message,
        });
      }

      let likes = post.likes;
      if (likes.includes(username)) {
        const index = likes.indexOf(username);
        likes.splice(index, 1);
      }

      post.likes = likes;
      post
        .save()
        .then((post) => {
          res.status(200).json({
            success: true,
            message: "Post unliked successfully.",
            data: post,
          });
        })
        .catch((err) => {
          console.log(err);
          const message = "Something went wrong :(";
          return res.status(200).json({
            success: false,
            message: message,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      const message = "Something went wrong :(";
      return res.status(200).json({
        success: false,
        message: message,
      });
    });
});

module.exports = router;
