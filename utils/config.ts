import type { Options } from "tmi.js";

class Config {

  public account: Options | undefined;
  public identifier: string = "!";

  constructor() {
    if (typeof process.env.TWITCH_USERNAME === "undefined"
        || typeof process.env.TWITCH_OAUTH_TOKEN === "undefined"
        || typeof process.env.TWITCH_CHANNELS === "undefined") {
      throw new Error("TWITCH_USERNAME or TWITCH_OAUTH or TWITCH_CHANNELS is undefined");
    }
    this.account = {
      identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
      },
      channels: [process.env.TWITCH_CHANNELS ?? ""],
    };
    this.identifier = process.env.IDENTIFIER ?? "!";
  }

}
export default Config;