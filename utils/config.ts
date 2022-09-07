import type { Options } from "tmi.js";

class Config {
  private account: Options | undefined;
  constructor() {
    this.account = {
      identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
      },
      channels: [process.env.TWITCH_CHANNEL ?? ""],
    };
  }

  public identifier(): string {
    return "!"
  }

}
export default Config;