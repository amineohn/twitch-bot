export const Join = async (
    channel: string,
    username: string,
    self: boolean,
) => {
    if (self) return;
    console.log(`* ${username} joined ${channel}`);
}