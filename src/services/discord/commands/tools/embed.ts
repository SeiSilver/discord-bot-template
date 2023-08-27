import {CommandInteraction, EmbedBuilder} from "discord.js";
import {CustomClient} from "@model/CustomClient";

const {SlashCommandBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return an embed!'),
    async execute(interaction: CommandInteraction, client: CustomClient) {
        if (!client.user) return;
        const embed = new EmbedBuilder()
            .setTitle(`Profile!`)
            .setDescription('This is an example description')
            .setColor(0x1abc9c)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                name: 'Silver neko',
                url: 'https://github.com/SeiSilver',
                iconURL: interaction.user.displayAvatarURL()
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .addFields([
                {
                    name: `field 1`,
                    value: 'field value 1',
                    inline: true
                },
                {
                    name: `field 2`,
                    value: 'field value 2',
                    inline: true
                },
            ]);

        await interaction.reply({
            embeds: [embed]
        });
    }
}