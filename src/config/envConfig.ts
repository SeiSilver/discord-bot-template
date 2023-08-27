import dotenv from "dotenv";
import * as process from "process";
import {LogUtils} from "@util/logUtils";

dotenv.config();

class EnvConfig {

    public static DISCORD_TOKEN: string = process.env.DISCORD_TOKEN || '';

    static initialize() {
        EnvConfig.validateRequireEnv();
    }

    private static validateRequireEnv() {
        if (!EnvConfig.DISCORD_TOKEN) {
            LogUtils.error("DISCORD_TOKEN is missing", null)
            process.exit(1);
        }

    }

}

EnvConfig.initialize();

export default EnvConfig;
