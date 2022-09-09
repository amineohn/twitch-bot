export class Helper {

    public async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async isEmptyObject(obj: string | undefined) {
        if (obj === undefined) {
            return false;
        }
        return !Object.keys(obj).length;
    }

    public async RandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public async RandomString(length: number) {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

}