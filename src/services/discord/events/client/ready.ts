import {Events} from "discord.js";
import {CustomClient} from "@model/CustomClient";
import {LogUtils} from "@util/logUtils";

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client: CustomClient) {
        if (client.user) {
            LogUtils.info(`Bot is ready!!! ${client.user.tag} is logged in and online`)
        } else {
            LogUtils.info(`Bott is offline`)
        }
    }
}