module.exports = {
    name: "ping",
    description: "Xem độ trễ của bot",
    aliases: ["pingpong", "pong"],
    category: "info",

    async execute(client, message, args) {
        message.reply({content: "Pong! *" + client.ws.ping + "ms*.", allowedMentions: { repliedUser: false } });
    }
}