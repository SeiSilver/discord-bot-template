import DiscordJS, {IntentsBitField, Partials} from "discord.js";
import dotenv from 'dotenv'
import ClientMapping from "./ClientMapping";

dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent
  ],
  partials: [Partials.Channel],
})

client.on('ready', () => {
  console.log('The bot is Online');
  ClientMapping(client);
});

client.login(process.env.TOKEN);
