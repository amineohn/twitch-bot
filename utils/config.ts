import type { Options } from "tmi.js";
import * as dotenv from "dotenv";
import { resolve } from "path";

class Config {
  constructor() {
    this.loadEnvironment();
    this.loadCredentials();
  }
  public loadEnvironment() {
    dotenv.config({
      path: resolve(__dirname, "../.env"),
    });
  }
  public loadCredentials() {
    this.account = {
      identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
      },
      channels: [process.env.TWITCH_CHANNEL ?? ""],
    };
  }
  public account: Options = {
    identity: {
      username: process.env.TWITCH_USERNAME,
      password: process.env.TWITCH_OAUTH_TOKEN,
    },
    channels: [process.env.TWITCH_CHANNEL ?? ""],
  };

    public readonly identifier = "!";
}
export default Config;