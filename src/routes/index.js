const express = require("express");
const voteRouter = require("./vote");

const router = express.Router();

router.use("/vote", voteRouter);

module.exports = router;
