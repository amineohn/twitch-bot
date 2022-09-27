import Config from "./repositories/config";
import { Client, Options } from "tmi.js";
import { Firebase } from "@libs/firebase";
import * as dotenv from "dotenv";
import { resolve } from "path";

import { onMessage } from "@events/onMessage";
import { OnDisconnected } from "@events/onDisconnected";
import { OnConnect } from "@events/onConnect";
import { OnJoin } from "@events/onJoin";

const config = new Config();
const client = new Client(<Options>config.account);

dotenv.config({
  path: resolve(__dirname, "../.env"),
});

client.on("message", onMessage);
client.on("disconnected", OnDisconnected);
client.on("connected", OnConnect);
client.on("join", OnJoin);

const firebase = new Firebase();
firebase.initialize();

client
  .connect()
  .then((r) => console.log(`* connected: ${r}`))
  .catch((e) => console.error(e));
