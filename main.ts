import Config from "./utils/config";
// @ts-ignore
import { onMessage } from "./events/onMessage";
import { Disconnected } from "./events/disconnected";

import tmi from "tmi.js";
import { Firebase } from "./libs/firebase";
const config = new Config();
const client = new tmi.Client(config.account);

client.on("connected", (address: string, port: number) => {
  console.log(`* connected to: address - ${address}, port - ${port}`);
});

client.on("message", onMessage);

// @ts-ignore
client.on("disconnected", Disconnected);

const firebase = new Firebase();
firebase.init();

client.connect()
    .then(r => console.log(`* connected: ${r}`))
    .catch(e => console.error(e));

