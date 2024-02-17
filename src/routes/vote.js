const express = require("express");
const router = express.Router();
const { controlVote } = require("../controllers/voteController");

router.post("/", controlVote);

module.exports = router;
