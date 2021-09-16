const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const downloader = require("@discord-player/downloader").Downloader;
const { Player } = require("discord-player");
const config = require('./config.json');
require('dotenv').config();

client.commands = new Collection();
client.slashCommands = new Collection();

client.config = config;
client.prefix = config.prefix;

const player = new Player(client, {
    leaveOnEnd: false,
    leaveOnStop: false,
    leaveOnEmpty: false,
    leaveOnEmptyCooldown: 300000
});

player.use("YOUTUBE_DL", downloader);

client.player = player;

player.on("trackStart", (queue, track) => {
    if(queue.metadata.channel) queue.metadata.channel.send(`Đang chơi: **${track.title}**!`)
});

module.exports = client;

require('./handler/baseHandler');

client.login(process.env.TOKEN, err => console.log(err));