import type { Options } from "tmi.js";

class Config {
  constructor() {
    this.loadCredentials();
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