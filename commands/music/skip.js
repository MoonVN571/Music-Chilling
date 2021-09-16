module.exports = {
    name: "skip",
    description: "Bỏ qua bài hát trong hàng đợi",
    aliases: ["sk"],
    category: "music",

    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);
        if (!queue || !queue.playing) return message.lineReply("Không có bài hát nào trong hàng chờ.");

        const currentTrack = queue.current;
        const success = queue.skip();
        message.lineReply(success ? "Đã bỏ qua bài **" + currentTrack + "**" : "Có gì đó sai sai thử lại sau!");
    }
}