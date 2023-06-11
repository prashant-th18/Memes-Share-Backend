const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const authRoutes = require("./routes/auth");

const app = express();

// To get data from '.env'
dotenv.config();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.use(express.json());
app.use(bodyParser.json());
// Use to parse nested objects, etc..
app.use(express.urlencoded({ extended: true }));

// Routes Definition
app.use("/auth", authRoutes);

// Handling errors
app.use((errors, req, res, next) => {
	res.status(500).json({
		message: "Something Went Wrong",
	});
});

// For connecting with DB
mongoose
	.connect(process.env.M_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then((result) => {
		console.log("Connected!");
		app.listen(PORT);
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
