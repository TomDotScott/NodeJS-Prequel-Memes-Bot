const Discord = require('discord.js');
const Snoowrap = require('snoowrap');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

