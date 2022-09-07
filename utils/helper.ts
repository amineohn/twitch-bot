export class Helper {
    constructor() {

    }
    public async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    public async isEmptyObject(obj: string | undefined) {
        if (obj === undefined) {
            return false;
        }
        return !Object.keys(obj).length;
    }

}