import {Loggers} from "@utils/logger";

export const OnJoin = async (
    channel: string,
    username: string,
    self: boolean,
) => {
    if (self) return;
    const logger = new Loggers();
    await logger.warn(`* (${username}) joined -> (${channel})`);
}