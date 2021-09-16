const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Xem websocket ping của bot",
    type: "Chat_INPUT",
    category: "info",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction, args) {
        await interaction.reply({ content: "Pong! *" + client.ws.ping + "ms*.", ephemeral: true });
    }
}