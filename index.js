require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection(); 
const botCommands = require('./commands');
const news = require('./commands/news');

const { connect } = require('http2');
 const token = require('./token.json');



Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on('ready', () => {
  console.info(`logged in as ${bot.user.tag}!`);
  console.log("connected sucsessfully")
});



bot.on( 'message', message => {
  if (message.content === '!avatar'){
    console.log("voici votre avatar");
    message.reply("voici votre avatar");
    message.reply(message.author.displayAvatarURL + bot.user.tag);
  }
})


