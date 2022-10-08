import DiscordJS from "discord.js";

export default async (client: DiscordJS.Client): Promise<void> => {

    client.on('messageCreate', (message) => {
        if (message.content == 'ping') {
            message.reply({
                content: 'test message ping'
            })
        }
    });

}