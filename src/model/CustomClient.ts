import {Client, ClientOptions, Collection} from "discord.js";

export class CustomClient extends Client {
    commands: Collection<string, any>;
    commandArray: any[];

    constructor(options: ClientOptions) {
        super(options);
        this.commands = new Collection();
        this.commandArray = [];
    }

    handlerCommands = async (commandPath: string) => {
        console.log("loading " + commandPath)
    }

    handlerEvents = async (eventPath: string) => {
        console.log("loading " + eventPath)
    }
}