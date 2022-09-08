import {Loggers} from "@utils/logger";

export const OnJoin = async (
    channel: string,
    username: string,
    self: boolean,
) => {
<<<<<<< HEAD
    if (self) return;
    const logger = new Loggers();
    await logger.warn(`* (${username}) joined -> (${channel})`);
=======

    if (self)
        return;

    console.log(`* ${username} joined ${channel}`);
>>>>>>> 1b4c59d (style(app): some whitespacing)
}