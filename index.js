require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection(); 
const botCommands = require('./commands');
const news = require('./commands/news');
const { connect } = require('http2');
 const token = require('./token.json');

console.log(botCommands) ;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

if (bot.on){
  console.log('connected successfully');
}

bot.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

bot.on( 'message', message => {
  if (message.content === '!avatar'){
    message.reply(message.author.displayAvatarURL);
  }
});
