const express = require("express");

const isAuth = require("../middleware/is-auth");
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", isAuth, postController.getPosts);

module.exports = router;
