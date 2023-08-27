import {CommandInteraction, SlashCommandBuilder} from "discord.js";
import {CustomClient} from "@model/CustomClient";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reset-profile')
        .setDescription('reset default profile!'),
    async execute(interaction: CommandInteraction, _client: CustomClient) {
        const newMessage = `Reset profile success`;
        await interaction.reply({
            content: newMessage
        });
    }
}