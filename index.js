const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {token, prefix, bot_age, words_array, bot_info} = require('./config.json')
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.login(process.env.TOKEN);
const {get} = require("snekfetch");
db = require('quick.db');
const ms = require('ms');




client.on("ready", () => {
    console.log(prefix);
    console.log(bot_age);
    console.log(bot_info.name);
    console.log(bot_info.version);
    client.user.setStatus('dnd'); 
  
  });

  client.on("message", (message) => {
if (message.content.startsWith(`${prefix}cat`)) {
    try {
         get('https://aws.random.cat/meow').then(response => {
               message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
               console.log('random cat picture');
                })
                } catch (e) {
                     console.log('error!');
                     }
                   };
                  });




client.on("message", (message) => {
    if (message.content === `${prefix}petacho`) {
       message.delete();      
       message.channel.send('<@499189439705120807> le goat');
    } else if (message.content === `${prefix}sad`) {
      message.delete();
      message.channel.send('je suis triste...')
    }

  });

client.on("message", (message) => {
   if (message.content === `${prefix}name`) {
       message.channel.send(message.guild.name);
    } else if (message.content === `${prefix}online`) {
      message.channel.send(`Membres totaux: ${message.guild.memberCount}`)
    } else if (message.content === `${prefix}moi`) {
      message.channel.send(`Name: ${message.author.username}`)
      message.channel.send(`ID: ${message.author.id}`)
    }
    else if (message.content === `prefix`) {
      message.channel.send(`${prefix}`)
    }
    else if (message.content === `${prefix}pp`) {
      message.reply(`tiens bg ${message.author.displayAvatarURL}`)
    }
    else if (message.content.toLocaleLowerCase().endsWith("quoi")) {
      message.channel.send("feur :joy: :joy: :joy: ")
    }
    else if (message.content.toLocaleLowerCase().endsWith("oui")) {
      message.channel.send("stiti :joy: :joy: :joy:")
    }
    else if (message.content.toLowerCase().endsWith("saucisson")) {
      message.channel.send("Bon toutou")
    }
});  

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase(); 

  if (command === 'args') {
    if (!args.length) {
       return message.channel.send(`Il y'a rien la ducon, ${message.author}!`);
    } else if (args[0] === 'miaule'){
       message.delete();
       return message.channel.send('Miaou');
    } else if (args[0] === 'aboie'){
       message.delete();
       return message.channel.send('Waf');
    }
      else if (args[0] === 'quoi'){
       message.delete();
       return message.channel.send('quoi');
    }
 
  
  

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === 'ban') {
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Ah batard tu veux ban <@${taggedUser.id}>?`);
    return;
 }
});


client.on("message", (message) => {
if (message.content.startsWith(`pet.hug`)) {
  const rando_imgs = [
  './images/câlin1.gif',
  './images/câlin2.gif',
  './images/câlin3.gif',
  './images/câlin4.gif',
  './images/câlin5.gif',
  './images/câlin6.gif',
  './images/câlin7.gif',
  './images/câlin8.gif',
  './images/câlin9.gif',
  './images/câlin10.gif',
  './images/câlin11.gif',
  './images/câlin12.gif',
  './images/câlin13.gif',
  './images/câlin14.gif',
  './images/câlin15.gif',
  './images/câlin16.gif',
  './images/câlin17.gif',
  './images/câlin18.gif',
  './images/câlin19.gif',
  './images/câlin20.gif',
  './images/câlin21.gif',
  './images/câlin22.gif',
  ]
  if(message.mentions.members.size == 1) {
  let member = message.mentions.members.first();
  message.channel.send(`${message.author} fait un câlin à ${member}!`, {
  file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
  });
  }
  else {
      message.channel.send("Merci d'indiquer un membre à qui faire un câlin !")
  }
}})

client.on("message", (message) => {
  if (message.content.startsWith(`pet.test`)) {
    const rando_imgs = [
    'https://tenor.com/bnEtd.gif',
    'https://tenor.com/bopm3.gif',
    'https://tenor.com/boPXY.gif',
    ]
    if(message.mentions.members.size == 1) {
    let member = message.mentions.members.first();
    sub = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setDescription(`${message.author} fait un câlin à **${member}**`)
    .setImage(sub);
  message.channel.send({
    embed
  });  
    }
    else {
        message.channel.send("Merci d'indiquer un membre à qui faire un câlin !")
    }
  }})
  
  client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(`${prefix}love`)) { 
     var love = [
    "**420%**|| :smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking: ||**420%**",
    "**0%** || :broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart: ||**0%**",
    "**10%**|| :heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**10%**",
    "**20%**|| :heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**20%**",
    "**30%**|| :heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**30%**",
    "**40%**|| :heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**40%**",
    "**50%**|| :heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**50%**",
    "**60%**|| :heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: ||**60%**",
    "**69%**|| :eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant: ||**69%**",
    "**70%**|| :heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: ||**70%**",
    "**80%**|| :heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart: ||**80%**",
    "**90%**|| :heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart: ||**90%**",
    "**100%**|| :heart::heart::heart::heart::heart::heart::heart::heart::heart::heart: ||**100%**",
    "**-100%**|| :snowflake: :snowflake::snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: ||**-100%**",

];


var user2 = message.mentions.members.last();
                    if (!user2) {
                            message.reply("Mentionne quelqu'un")
                            return;
                    }
                    /*
                    if(!user) return message.channel.send("Can't find user!");
                    if(!user2) return message.channel.send("Can't find user!");
                    */
                    var athor = message.author
                    var author = message.member.nickname
                    var embed = new Discord.RichEmbed()
                            .setThumbnail("https://media.discordapp.net/attachments/427168044528173056/436659295598280725/meterheart.png?width=344&height=344")

                            .setDescription(" " + " " + "       __**:heartbeat::bow_and_arrow: MATCHMAKING :bow_and_arrow::heartbeat:**__" + "" + `\n\n          :small_red_triangle_down:**[**` + message.author.username + "**]**" + "" + "\n          :small_red_triangle:**[**" + user2.user.username + "**]**" + "\n\n" + love[Math.floor(Math.random() * love.length)])

                            .setColor(0xff0000)
                            
                            message.channel.send(embed)
}})

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith(`pet.trash`)) {
    var user3 = message.mentions.members.last();
   var insults = [
   "Fils de pute",
   "Sale merde",
   "Nique ta race",
   "Mange tes morts",
   "Sombre enculé",
   "Espèce de bachi-bouzouk",
   "Va chier dans ta caisse",
   `<@${user3.id}> t'es qu'une merde`



  ];


 

   var user = message.mentions.members.first()

          if (!user) {
                  message.reply("Il me faut quelqu'un à insulter")
                  return;
          }
          message.channel.send({embed:{
              color: 0xff0000,
              author: {
                  name: `${message.author.username} a dit..`,
                  icon_url: message.author.avatarURL
              },
              description: `\n:anger_right: **${insults[Math.floor(Math.random() * insults.length)]}**`
          }})
}})




client.on('message', message => {
  if (message.content.toLowerCase().startsWith('pet.say')) {
      if (message.author.bot) return;
      const SayMessage = message.content.slice(7).trim();
      message.delete()
      message.channel.send(SayMessage )
  }
});


client.on("message", msg => {
  if (msg.content.startsWith(prefix + "mute")) {
    
    
    // Variables
    var muteRole = msg.guild.roles.find(role => role.name.toLowerCase().includes("muted"));
    var muteUser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    
    
    // Conditions
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("Tu n'as pas les permissions pour faire ça!");
    if (!muteUser) return msg.channel.send("Il faut mentionner quelqu'un!");
    if (!muteRole) return msg.channel.send(`Il n'y a pas de role "muted"`);
    if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("Je n'ai pas les permissions suffisantes");
    if (!muteReason) muteReason = "Il n'y a pas de raison";
    
    // Embed
    var muteEmbed = new Discord.RichEmbed() 
    .setTitle("Mute")
    .addField("Muted user", muteUser)
    .addField("Reason", muteReason)
    .setFooter(`Muted par ${msg.author.tag}`)
    .setTimestamp();
    
    //Mute
    muteUser.addRole(muteRole);
    msg.channel.send(`${muteUser} a été mute`);
    msg.channel.send(muteEmbed);
    
  }
  if (msg.content.startsWith(prefix + 'unmute')) {
      if (msg.member.hasPermission('MANAGE_ROLES')) {
          var muteRole = msg.guild.roles.find(role => role.name.toLowerCase().includes("muted"));
          var muteUser = msg.mentions.members.first();
          muteUser.removeRole(muteRole);
          msg.channel.send(muteUser + ' a été unmute');

      } else {
          msg.channel.send("Il faut mentionner quelqu'un à demute")
      }
  }
})