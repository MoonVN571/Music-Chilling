const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: "leave",
    description: "Thoát khỏi phòng thoại",
    aliases: ["disconnect"],
    category: "music",

    async execute(client, message, args) {
        if(!message.member.voice.channel && message.member.voice.channel !== message.guild.me.voice.channel) return;

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guildId,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        connection.destroy();
        message.react("👌");
    }
}