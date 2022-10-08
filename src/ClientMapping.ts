import DiscordJS from "discord.js";
import MessageListener from "./listener/MessageListener";
import WOKCommands from "wokcommands";
import path from "path";

export default (client: DiscordJS.Client) => {
  MessageListener(client);
  // @ts-ignore
  new WOKCommands(client, {
    commandDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['879296318395277352']
  })
}