<p align="center">
  <img src="https://github.com/blurwind/wumpus-store-express/assets/96443442/bdf3f824-58b1-4fbb-b934-684c32a4c36e" alt="Wumpus.store">
</p>

<h1 align="center">Wumpus Store Express</h1>

<p align="center">Receive an embed by webhook when someone votes for your bot on <a href="https://wumpus.store">Wumpus.store</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/github/stars/blurwind/wumpus-store-express" alt="Stars">
  <img src="https://img.shields.io/github/forks/blurwind/wumpus-store-express" alt="Forks">
</p>

## 🤔 What is it?
This is an API made with [Express](https://expressjs.com/) for [Wumpus.store](https://wumpus.store), to allow bot developers to receive embeds via a [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks?__cf_chl_tk=ZS.jMt3z7KjacUMOl1Fy2HdD_aHYzRdZLLIAHogiB3w-1708138741-0.0-4434) when users vote for their bots on [Wumpus.store](https://wumpus.store).
<blockquote>
  ℹ️ This can only be used if your bot is listed on Wumpus.store!
</blockquote>

## 🛠️ How to setup?

- Clone the repository
  - Use `git clone https://github.com/blurwind/wumpus-store-express`
- Install the dependencies by using `npm install`
  - Run `npm install` in the terminal
- Rename `.env.example` to `.env` and fill it with your data
  - Make sure to choose a strong password for your authentification token, as it will be used to verify that requests are coming from Wumpus.store : paste it in the `AUTH_TOKEN` field
  - Create a webhook on your Discord server, click [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks?__cf_chl_tk=ZS.jMt3z7KjacUMOl1Fy2HdD_aHYzRdZLLIAHogiB3w-1708138741-0.0-4434) for a guide : paste the URL in the `WEBHOOK_URL` field
- Adapt the code depending on where you want to host the API (especially  the part for starting the server)
  - Vercel can be a good solution, [here's a tutorial on how to do it](https://www.youtube.com/watch?v=B-T69_VP2Ls)
- Once your API is online, go to your bot's Wumpus.store page and click on the "[Edit Discord Bot](https://wumpus.store/bot/BOT_ID/edit)" button.
  - On the left, you have a "Webhooks" section with two fields.
  - In the first field, enter the URL of your API (for example https://x.com/vote | `/vote` need to be at the end of the URL)
  - In the second field, enter the **EXACT** same authentification token that you choosed earlier in the `.env` file
  - Save your changes, now you can test if everything is working by clicking on the "Send Webhook" button


## 👀 How it looks?
  <img src="https://cdn.discordapp.com/attachments/1207046683360370730/1208254654279061575/image.png?ex=65e29dd5&is=65d028d5&hm=f2b8bcafc797401d92b447c61049a03c4cb3acd53f5896bf74fdc7597af599ff&" alt="Final">