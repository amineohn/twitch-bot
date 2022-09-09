import {Logger} from "logger-colors";

export class Loggers {
    private centerColumns = 50;
    private operationId = 'TWITCH';
    public logger = new Logger({
        operationId: this.operationId,
        centerColumns: this.centerColumns,
    });
    constructor() {
        // ...
    }
    public async log(message: string, center?: boolean) {
        await this.logger.cyan(message, center);
    }
    public async error(message: string, center?: boolean) {
        await this.logger.error(message, center);
    }
    public async warn(message: string, center?: boolean) {
        await this.logger.warn(message, center);
    }
    public async info(message: string, center?: boolean) {
        await this.logger.info(message, center);
    }
    public async debug(message: string, center?: boolean) {
        if(process.env.DEBUG) {
            await this.logger.warn(`DEBUG: ${message}`, center)
        }
    }
}