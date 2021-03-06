require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('52574e130fa4489b91b823d78baff6a3');

bot.commands = new Discord.Collection();

const botCommands = require('./commands');
const news = require('./commands/news');
console.log(botCommands) ;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = "ODE1OTMwNTIwODAxMjQ3Mjcy.YDzkgw.8cMAgZa9UysA9JIO0OZFMuf398c";

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

console.log(news);
