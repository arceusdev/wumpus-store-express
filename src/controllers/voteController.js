const webhookEmbed = require("../functions/webhookEmbed");

const AUTH_TOKEN = process.env.AUTH_TOKEN;

async function controlVote(req, res) {
  const authorizationHeader = req.headers.authorization;
  const { userId, botId } = req.body;

  // Check if the request is coming from Wumpus.store
  if (authorizationHeader !== AUTH_TOKEN) {
    return res.status(403).json({ error: "Unauthorized." });
  }

  try {
    await webhookEmbed(userId, botId);
    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong." });
  }
}

module.exports = { controlVote };
