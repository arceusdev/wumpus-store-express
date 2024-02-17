const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const WEBHOOK_URL = process.env.WEBHOOK_URL;

async function webhookEmbed(userId, botId) {
  try {
    const webhookUrl = WEBHOOK_URL;

    const now = Math.floor(Date.now() / 1000);
    const inTwelveHours = now + 12 * 60 * 60;
    
    const embed = {
      embeds: [
        {
          title: "Voted",
          url: `https://wumpus.store/bot/${botId}`,
          description: `<@${userId}> voted for <@${botId}>!`,
          color: 0xb5a4e0,
          fields: [
            {
              name: "Voted",
              value: `<t:${now}:f>`,
              inline: true,
            },
            {
              name: "Will be able to vote",
              value: `<t:${inTwelveHours}:R>`,
              inline: true,
            },
          ],
        },
      ],
      content: `<@${userId}> voted for <@${botId}>!`,
    };

    await axios.post(webhookUrl, embed);
  } catch (error) {
    console.error("Error sending Discord webhook:", error);
  }
}

module.exports = webhookEmbed;
