import fs from "fs";
import {REST} from "discord.js";
import {Routes} from "discord-api-types/v9"
import EnvConfig from "@config/envConfig";
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
        const clientId = "1126514848428204093";
        const rest = new REST().setToken(EnvConfig.DISCORD_TOKEN);
        try {
            LogUtils.info("Start refreshing application (/) commands.");
            await rest.put(Routes.applicationCommands(clientId), {
                body: client.commandArray,
            })
        } catch (error) {
            console.log(error);
        }

    }
}
