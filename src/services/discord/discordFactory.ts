import {IntentsBitField, Partials} from "discord.js";
import {CustomClient} from "@model/CustomClient";
import {HandlerFactory} from "@service/discord/handlers/handlerFactory";
import EnvConfig from "@config/envConfig";

export class DiscordFactory {

    private readonly handlerPath: string;
    private readonly commonPath: string;
    private readonly eventPath: string;
    private readonly client: CustomClient;

    constructor(handlerPath: string, commonPath: string, eventPath: string) {
        this.handlerPath = handlerPath;
        this.commonPath = commonPath;
        this.eventPath = eventPath;

        this.client = new CustomClient({
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent,
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.DirectMessages,
            ],
            partials: [
                Partials.Message,
                Partials.ThreadMember,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.User,
                Partials.Channel,
                Partials.Reaction
            ]
        });
    }

    public init(): void {
        const handlerFactory = new HandlerFactory(this.client, this.handlerPath);
        handlerFactory.loadingHandler();
        this.client.handlerCommands(this.commonPath);
        this.client.handlerEvents(this.eventPath);
        this.client.login(EnvConfig.DISCORD_TOKEN);
    }
}
