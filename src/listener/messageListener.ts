import DiscordJS from "discord.js";

module.exports = async (client: DiscordJS.Client): Promise<void> => {

    client.on('messageCreate', (message) => {
        if (message.content == 'ping') {
            message.reply({
                content: 'pong'
            })
        }
    });

}