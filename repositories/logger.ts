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
        this.logger.cyan(message);
    }
    public async error(message: string) {
        this.logger.error(message);
    }
    public async warn(message: string) {
        this.logger.warn(message);
    }
    public async info(message: string) {
        this.logger.info(message);
    }
    public async debug(message: string) {
        if(process.env.DEBUG) {
            this.logger.warn(`DEBUG: ${message}`)
        }
    }
}