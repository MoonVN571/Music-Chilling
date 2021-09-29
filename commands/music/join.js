const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: "join",
    description: "Tham gia phòng thoại của bạn",
    aliases: ["connect"],
    category: "music",

    async execute(client, message, args) {
        if(message.member.voice.channel && message.member.voice.channel == message.guild.me.voice.channel) return;

        message.react("👌");
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guildId,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
    }
}