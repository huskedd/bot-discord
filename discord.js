//see index.js for new changes 
//the sql database for password is offline


const mysql = require('mysql2');
const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('52574e130fa4489b91b823d78baff6a3');
const pronote = require('@bugsounet/pronote-api');



bot.commands = new Discord.Collection();

const botCommands = require('./commands');
const news = require('./commands/news');
const name = require('./name');
const ping = require('./commands/ping');
const { Session } = require('inspector');
const { PronoteSession } = require('@bugsounet/pronote-api');
const { setServers } = require('dns');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Samefa931693020533!' 

})


Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', msg => {
  if (msg.content === '!name') {
    msg.reply(PronoteSession.id);
    msg.channel.send(PronoteSession.id);
  }
});

bot.on('message', msg => {
  if (msg.content === 'session') {
    msg.reply(Session);
      
  }
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connecté à la base de données MySQL!");
//    db.query("CREATE DATABASE mabdd", function (err, result) {
//         if (err) throw err;
//         console.log("Base de données créée !");
//       });
      
//   });
