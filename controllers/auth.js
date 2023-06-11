const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.CLIENT_ID);

exports.handleLogin = async (req, res, next) => {
	// POST
	const { token } = req.body;
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.CLIENT_ID,
	});

	// ticket.payload contains information about the user
	const { name, email, picture, sub } = ticket.getPayload();
	// sub -> Unique Identifier for this user.
    

	console.log(ticket);
	res.status(200).json({
		message: "Reached!",
	});
};
