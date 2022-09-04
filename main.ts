import tmi from "tmi.js";
import Config from "@utils/config";
import { onMessage } from "@events/onMessage";
const config = new Config();
const client = new tmi.Client(config.account);

client.on("connected", (address: string, port: number) => {
  console.log(`* connected to: address - ${address}, port - ${port}`);
});
client.on("message", onMessage);

client.connect().then(r => console.log(`* connected: ${r}`));
