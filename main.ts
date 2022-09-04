import Config from "./utils/config";
import { onMessage } from "./events/onMessage";
import tmi from "tmi.js";

  const config = new Config();
  const client = new tmi.Client(config.account);
  client.on("connected", (address: string, port: number) => {
    console.log(`* connected to: address - ${address}, port - ${port}`);
  });
  client.on("message", onMessage);

  client.connect()
      .then(r => console.log(`* connected: ${r}`))
      .catch(e => console.error(e));

