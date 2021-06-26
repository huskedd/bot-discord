/******************THIS IS THE MAIN FILE FOR THE BOT ********************
***********************************************************************/

const fs = require('fs');
const pronote = require('@bugsounet/pronote-api');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./token.json');
//the password/url/username/and other thing
const id = require('./id.json');
const getMarks = require('@bugsounet/pronote-api/src/fetch/pronote/marks');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	bot.commands.set(command.name, command);
}




  bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

//bot for creating an handler later

/*   bot.on('message', message => {
	if (!message.content.startsWith('!') || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
}); */

        //see token.json for token
  bot.login(token.token);

//see id.json for sc
const url = id.url;
const username = id.username;
const password = id.password;


async function main()
{
    const session = await pronote.login(url, username, password/*, cas*/);
    const displaySession = console.log('connecté sur Compte Dev :' + session.user.name);
    
/*     console.log(`nombres de devoirs a faire : ${pronote.fetchHomeworks}`); */
    // etc. les fonctions utilisables sont 'timetable', 'marks', 'contents', 'evaluations', 'absences', 
    // 'homeworks', 'infos', et 'menu', sans oublier les champs 'user' et 'params' qui regorgent d'informations.
}

async function absences(){
    const session = await pronote.login(url, username, password) //login sur pronote
    (`L'élève a ${pronote.fetchAbsences.length} absence`);
    

}

async function classe() {
  const session = await pronote.login(url,username, password)
  console.log(session.user.studentClass.name); // Affiche la classe du trimestre 
}

async function grades() {
  const session = await pronote.login(url, username, password);
  /* {pronote.getMarks.length}; */
  pronote.fetchMarks.length;
}

async function homeworks() {
    pronote.fetchHomeworks.length;
}

async function displayName() {
  const session = await pronote.login(url, username, password);
  session.user.name;
}


bot.on('message', msg => {
  if (msg.content === 'absences') {
    msg.reply(`L'élève a ${pronote.fetchAbsences.length} absence`); //affiche les absences
    
  }
});

bot.on('message', msg => {
  if (msg.content === '!classeName') {
    const session = pronote.login(url, username, password);
    msg.reply((session.user.studentClass.name));
  }
});

bot.on('message', msg => {
  if (msg.content === 'pronote.grade') {
      grades(pronote.fetchMarks);
  }
});

main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);

    }
});

grades().catch(err => {
  if(err)
  console.log(err, args);
  else {
    console.log(err)
  
  }
});
