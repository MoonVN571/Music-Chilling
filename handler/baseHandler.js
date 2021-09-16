const { readdirSync } = require('fs');
const client = require('../index');

// Event handler
readdirSync('./events/').forEach(file => require('../events/' + file));

// Command handler
readdirSync('./commands/').forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`);

    commands.forEach(file => {
        const pull = require(`../commands/${dir}/${file}`);

        if(pull.name) {
            client.commands.set(pull.name, pull);
        } else {
            console.log(`commands/${file} -> Thiếu pull.name`);
        }
    });
});

let cmd = [];

// Slash command handler
readdirSync('./slashCommands/').forEach(dir => {
    const slash = readdirSync(`./slashCommands/${dir}/`);

    slash.forEach(file => {
        const pull = require(`../slashCommands/${dir}/${file}`);

        if(pull.name) {
            client.slashCommands.set(pull.name, pull);
            cmd.push(pull);
        } else {
            console.log(`slashCommands/${pull} -> Thiếu pull.name`);
        }
    });
});

client.on('ready', async() => {
    // Đặt slash commands cho 1 server, nhét ID vào đây
    // client.guilds.cache.get(client.config.SERVER_ID).commands.set(cmd);

    // Đặt slash commands tất cả servers
    // client.application.commands.set(cmd);
});
