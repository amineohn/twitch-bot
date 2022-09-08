import {Client, Options} from "tmi.js";
import Config from "@/repositories/config";
import {Loggers} from "@/repositories/logger";
export const OnDisconnected = async (
    reason: string,
) => {
    const config = new Config();
    const client = new Client(<Options>config.account);
    const logger = new Loggers();
    try {
        await logger.error(`* disconnected -> (${reason})`);
        await client.connect();
        await logger.debug(`* reconnected -> (${reason})`);
    }
    catch (e) {
        await logger.error(`* error -> (${e})`);
        await client.disconnect();
    }
}
