import { Logger, LoggerOptions } from "logger-colors";

export class Loggers {

    private centerColumns = 50;
    private operationId = 'TWITCH';
    private isDebug = !!process.env.DEBUG;
    private options?: LoggerOptions
    private logger = new Logger(this.options);

    constructor() {
        this.logger = new Logger({
            centerColumns: this.centerColumns,
            operationId: this.operationId,
        });
    }

    public async log(message: string, center?: boolean) {
        this.logger.cyan(message, center);
    }

    public async error(message: string, center?: boolean) {
        this.logger.error(message, center);
    }

    public async warn(message: string, center?: boolean) {
        this.logger.warn(message, center);
    }

    public async info(message: string, center?: boolean) {
        this.logger.info(message, center);
    }

    public async debug(message: string, center?: boolean) {
        new Promise((resolve, reject) => {
            if (this.isDebug) {
                this.logger.warn(`DEBUG: ${message}`, center);
                resolve(true);
            }
            reject(false);
        });
    }
}