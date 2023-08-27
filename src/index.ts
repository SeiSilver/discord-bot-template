import {DiscordFactory} from "@service/discord/discordFactory";

const HANDLER_PATH = 'services/discord/handlers';
const COMMAND_PATH = "services/discord/commands";
const EVENT_PATH = "services/discord/events";

const discordFactory = new DiscordFactory(HANDLER_PATH, COMMAND_PATH, EVENT_PATH);

discordFactory.init();