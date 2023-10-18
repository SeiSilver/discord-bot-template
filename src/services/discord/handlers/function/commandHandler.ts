import fs from "fs";
import {Events} from "discord.js";
import {CustomClient} from "@model/CustomClient";
import {LogUtils} from "@util/logUtils";

module.exports = (client: CustomClient) => {

    client.handlerCommands = async (commandPath: string) => {
        const COMMAND_ROOT_PATH = `./src/${commandPath}`;

        const commandFolders = fs.readdirSync(COMMAND_ROOT_PATH);
        for (const folder of commandFolders) {

            const commandFiles = fs.readdirSync(`${COMMAND_ROOT_PATH}/${folder}`)
                .filter((file) => file.endsWith('.ts'));

            const {commands, commandArray} = client;
            for (const file of commandFiles) {
                const command = require(`${commandPath}/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
            }
        }
        client.on(Events.ClientReady, async () => {
            try {
                LogUtils.info("Start refreshing application (/) commands.");
                await client.application?.commands.set(client.commandArray);
            } catch (error) {
                LogUtils.error("Error loading (/) commands!", error);
            }
        });

    }
}
