const express = require("express");
const jwt = require("jsonwebtoken");

const authController = require("../controllers/auth");
const { handleLogin } = require("../controllers/auth");

const router = express.Router();

router.post("/google-login", handleLogin);

module.exports = router;
