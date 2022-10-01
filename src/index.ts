import DiscordJS, { IntentsBitField } from "discord.js";
import dotenv from 'dotenv'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', () => {
    console.log('The bot is Online');
});

client.on('messageCreate', (message) => {
    console.log(message.content);
    if (message.content == 'ping') {
        message.reply({
            content: 'pong'
        })
    }
});

client.login(process.env.TOKEN);
