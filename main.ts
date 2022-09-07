import Config from "./utils/config";
import { onMessage } from "@events/onMessage";
import { Disconnected } from "@events/disconnected";

import tmi, { Options } from "tmi.js";
import { Firebase } from "@libs/firebase";
import * as dotenv from "dotenv";
import {resolve} from "path";
const config = new Config();
const client = new tmi.Client(<Options>config.account);
dotenv.config({
  path: resolve(__dirname, "../.env"),
});

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

