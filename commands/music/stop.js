module.exports = {
    name: "stop",
    description: "Dừng chơi nhạc",
    aliases: ["stop"],
    category: "music",

    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);
        if (!queue)
            return message.lineReply("Không có bài hát nào đang được phát cả!");
        
        queue.destroy();
        message.lineReply("Đã ngưng phát nhạc!");
    }
}