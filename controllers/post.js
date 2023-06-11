const Post = require("../models/post");

exports.getPosts = async (req, res, next) => {
	try {
		const data = await Post.find();
		res.status(200).json({
			posts: data,
		});
	} catch (err) {
		res.status(500).json({
			err: err,
		});
	}
};
