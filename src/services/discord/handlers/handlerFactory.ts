import fs from "fs";
import {CustomClient} from "@model/CustomClient";
import {LogUtils} from "@util/logUtils";

export class HandlerFactory {

    private readonly client: CustomClient;
    private readonly handlerRootPath: string;
    private readonly handlerPath: string;

    constructor(client: CustomClient, handlerPath: string) {
        this.client = client;
        this.handlerRootPath = `./src/${handlerPath}`;
        this.handlerPath = `${handlerPath}`;
    }

    public loadingHandler(): void {
        const handlerFolders = fs.readdirSync(this.handlerRootPath)
            .filter((file) => !file.endsWith('handlerFactory.ts'));
        for (const folder of handlerFolders) {
            const handlerFiles = fs.readdirSync(`${this.handlerRootPath}/${folder}`)
                .filter((file) => file.endsWith('.ts'));
            for (const file of handlerFiles) {
                require(`${this.handlerPath}/${folder}/${file}`)(this.client);
            }
        }
        LogUtils.info('Loading discord handler Success!')
    }
}
