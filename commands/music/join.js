const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: "join",
    description: "Tham gia phòng thoại của bạn",
    aliases: ["connect"],
    category: "music",

    async execute(client, message, args) {

        if(!message.guild.member.me.voice.channel) {
            message.react("👌");
            joinVoiceChannel({
                channelId: message.guildmember.me.voice.channel.id,
                guildId: message.guildId,
                adapterCreator: message.guild.voiceAdapterCreator,
             });
        }
    }
}