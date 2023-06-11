const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

// To get data from '.env'
dotenv.config();

app.use(cors());
app.use(express.json());
// Use to parse nested objects, etc..
app.use(express.urlencoded({ extended: true }));

// Routes Definition
app.use("/auth", authRoutes);

// For connecting with DB
mongoose
	.connect(process.env.M_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then((result) => {
		console.log("Connected!");
		app.listen(8080);
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
