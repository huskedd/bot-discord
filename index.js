const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = require('./token.json');

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
