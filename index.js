const fs = require('fs');
const pronote = require('@bugsounet/pronote-api');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./token.json');
//the password/url/username/and other thing
const id = require('./id.json');
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

  bot.on('message', message => {
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
});

        //see token.json for token
  bot.login(token.token);

//see id.json for sc
const url = id.url;
const username = id.username;
const password = id.password;


async function main()
{
    const session = await pronote.login(url, username, password/*, cas*/);
    
    let displaySession = console.log(session.user.name); // Affiche le nom de l'élève
    
    console.log(session.user.studentClass.name); // Affiche la classe du trimestre 


    console.log(`L'élève a ${pronote.fetchAbsences.length} absence`);
    
    console.log(`nombres de devoirs a faire : ${pronote.fetchHomeworks.length}`);
    
    
    // etc. les fonctions utilisables sont 'timetable', 'marks', 'contents', 'evaluations', 'absences', 
    // 'homeworks', 'infos', et 'menu', sans oublier les champs 'user' et 'params' qui regorgent d'informations.
}



main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);

    }
});
