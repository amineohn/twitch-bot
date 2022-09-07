import {Loggers} from "@utils/logger";

export const OnConnect = async (
    address: string,
    port: number,
) => {
    const logger = new Loggers();
    await logger.warn(`* connected to: address -> (${address}), port -> (${port})`);
}