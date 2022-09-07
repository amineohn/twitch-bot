import {Client, Options} from "tmi.js";
import Config from "@utils/config";
export const Disconnected = async (
    reason: string,
) => {
    const config = new Config();
    const client = new Client(<Options>config.account);

    try {
        console.log(`* disconnected: ${reason}`);
        await client.connect();
        console.log(`* reconnected: ${reason}`);
    }
    catch (e) {
        console.error(e);
        await client.disconnect();
    }
}
