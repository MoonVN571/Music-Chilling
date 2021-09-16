const { Client, Message } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: "queue",
    description: "Xem danh sách play của bạn",
    aliases: ["que"],
    category: "music",

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);
        if (!queue || !queue.playing) return message.lineReply("Không có bài hát nào trong hàng chờ.");

        const currentTrack = queue.current;
        const tracks = queue.tracks.slice(0, 10).map((m, i) => {
            return `${i + 1}. **${m.title}** - ([link](${m.url}))`;
        });

        message.reply({
            embeds: [
                {
                    title: "Hàng chờ",
                    description: `${tracks.join("\n")}${
                        queue.tracks.length > tracks.length
                            ? `\n...${queue.tracks.length - tracks.length === 1 ? `${queue.tracks.length - tracks.length} video khác`
                            : `${queue.tracks.length - tracks.length} video khác`}`
                            : ""
                    }`,
                    color: 0xff0000,
                    fields: [{ name: "Đang chơi", value: `**${currentTrack.title}** - [link](${currentTrack.url})` }]
                }
            ], allowedMentions: { repliedUser: false }
        });
    }
}