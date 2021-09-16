const client = require('../index');

client.on('messageCreate', (message) => {
    if (message.author.bot || message.channel.type == "dm" || !message.content.startsWith(client.config.PREFIX)) return;
    
    const args = message.content.slice(client.config.PREFIX.length).split(/ +/);
    const cmdName = args.shift().toLowerCase();

    const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    function lineReply(content, mention) {
        if (!mention) message.reply({ content: content, allowedMentions: { repliedUser: false } });
        if (mention) message.reply({ content: content, allowedMentions: { repliedUser: true } });
    }

    message.lineReply = lineReply;

    if (!cmd) return;

    if(cmd.category == "music" && !message.member?.voice.channel)
        return lineReply("Bạn phải kết nối vào phòng thoại!");

    
    cmd.execute(client, message, args);
});