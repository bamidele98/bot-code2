const TelegramBot = require("node-telegram-bot-api");

// Replace YOUR_TOKEN with your bot's API token
const bot = new TelegramBot("6221093950:AAHpjgGle_bq0LQzabBq-m-G3aUZuuTrwNs", {
  polling: true,
});

// Define a function to handle incoming messages
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  bot.sendMessage(chatId, `You said: ${messageText}`);
});
