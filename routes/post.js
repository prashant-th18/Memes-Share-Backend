const express = require("express");

const isAuth = require("../middleware/is-auth");
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", isAuth, postController.getPosts);
router.post("/create", isAuth, postController.createPost);
router.post("/upvote/:id", isAuth, postController.upvotePost);
router.post("/downvote/:id", isAuth, postController.downvotePost);
router.delete("/delete/:id", isAuth, postController.deletePost);

module.exports = router;
