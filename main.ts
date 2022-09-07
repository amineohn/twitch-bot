import Config from "./utils/config";
import { Client, Options } from "tmi.js";
import { Firebase } from "@libs/firebase";
import * as dotenv from "dotenv";
import { resolve } from "path";

import { onMessage } from "@events/onMessage";
import { Disconnected } from "@events/disconnected";
import { Connected } from "@events/connected";
import { Join } from "@events/join";

const config = new Config();
const client = new Client(<Options>config.account);

dotenv.config({
  path: resolve(__dirname, "../.env"),
});

client.on("message", onMessage);
client.on("disconnected", Disconnected);
client.on("connected", Connected);
client.on("join", Join);

const firebase = new Firebase();
firebase.init();

client.connect()
    .then(r => console.log(`* connected: ${r}`))
    .catch(e => console.error(e));

