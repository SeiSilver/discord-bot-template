import {CommandInteraction, Events} from "discord.js";
import {CustomClient} from "@model/CustomClient";

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction: CommandInteraction, client: CustomClient) {
        if (interaction.isChatInputCommand()) {
            const {commands} = client;
            const {commandName} = interaction;

            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.log(error);
                await interaction.reply({
                    content: `Something went wrong while executing this command...`,
                    ephemeral: true
                });
            }
        }
    }
};
