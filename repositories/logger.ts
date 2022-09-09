import {Logger} from "logger-colors";

export class Loggers {
    public logger = new Logger({
        operationId: 'TWITCH-BOT',
        centerColumns: 50,
    });
    constructor() {
        // ...
    }
    public async log(message: string) {
        await this.logger.cyan(message);
    }
    public async error(message: string) {
        await this.logger.error(message);
    }
    public async warn(message: string) {
        await this.logger.warn(message);
    }
    public async info(message: string) {
        await this.logger.info(message);
    }
    public async debug(message: string) {
        if(process.env.DEBUG) {
            await this.logger.warn(`DEBUG: ${message}`)
        }
    }
}