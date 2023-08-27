import fs from "fs";
import {CustomClient} from "@model/CustomClient";

module.exports = (client: CustomClient) => {
    client.handlerEvents = async (eventPath: string) => {
        const EVENT_ROOT_PATH = `./src/${eventPath}`;

        const eventFolders = fs.readdirSync(EVENT_ROOT_PATH);
        for (const folder of eventFolders) {

            const eventFiles = fs.readdirSync(`${EVENT_ROOT_PATH}/${folder}`)
                .filter((file) => file.endsWith('.ts'));

            for (const file of eventFiles) {
                const event = require(`${eventPath}/${folder}/${file}`);
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args, client));
                } else {
                    client.on(event.name, (...args) => event.execute(...args, client));
                }
            }
        }
    }
}
