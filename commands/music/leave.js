const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: "leave",
    description: "Thoát khỏi phòng thoại",
    aliases: ["disconnect"],
    category: "music",

    async execute(client, message, args) {
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: guildID,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        if(message.guild.member.me.voice.channel) {
            connection.destroy();
            message.react("👌");
        }
    }
}