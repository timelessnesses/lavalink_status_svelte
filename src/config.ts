import { env } from "$env/dynamic/public";

interface Information{
    name: string;
    website: string | null;
}

export interface Lavalink{
    host: string;
    port: number;
    ssl: boolean;
    password: string;
    information: Information | null;
}

const lavalinks: Lavalink[] = [{"host": "lavalink.jirayu.net", "port": 13592, "ssl": false, "password": "youshallnotpass", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavahatry4.techbyte.host", "port": 3000, "ssl": false, "password": "NAIGLAVA-dash.techbyte.host", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "46.202.82.164", "port": 1027, "ssl": false, "password": "jmlitelavalink", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "69.30.219.180", "port": 1047, "ssl": false, "password": "yothisnodeishostedbymushroom0162", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalink.devxcode.in", "port": 80, "ssl": false, "password": "DevamOP", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalinkv3.devxcode.in", "port": 80, "ssl": false, "password": "DevamOP", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lava.luke.gg", "port": 80, "ssl": false, "password": "discordbotlist.com", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "panel.nyxel.site", "port": 1212, "ssl": false, "password": "nyxel.site", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalink_v4.muzykant.xyz", "port": 80, "ssl": false, "password": "https://discord.gg/v6sdrD9kPh", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalink_v3.muzykant.xyz", "port": 80, "ssl": false, "password": "https://discord.gg/v6sdrD9kPh", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "139.59.109.24", "port": 7800, "ssl": false, "password": "https://discord.gg/mjS5J2K3ep", "information": {"name": "This lavalink is running version v3", "website": ""}}, {"host": "lava-v4.ajieblogs.eu.org", "port": 443, "ssl": true, "password": "https://dsc.gg/ajidevserver", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalink.devxcode.in", "port": 443, "ssl": true, "password": "DevamOP", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalinkv3.devxcode.in", "port": 443, "ssl": true, "password": "DevamOP", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "pool-us.alfari.id", "port": 443, "ssl": true, "password": "alfari", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "pool-sg.alfari.id", "port": 443, "ssl": true, "password": "alfari", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalink_v4.muzykant.xyz", "port": 443, "ssl": true, "password": "https://discord.gg/v6sdrD9kPh", "information": {"name": "This lavalink is running version v4", "website": ""}}, {"host": "lavalink_v3.muzykant.xyz", "port": 443, "ssl": true, "password": "https://discord.gg/v6sdrD9kPh", "information": {"name": "This lavalink is running version v3", "website": ""}}]

// DO NOT EVEN DARE EDIT THIS PART 

let interval = null

try{
    if(!env.PUBLIC_PING_INTERVAL){
        console.warn("⚠️PUBLIC_PING_INTERVAL is not set, defaulting to 30 seconds")
        interval = "60000"
    }
    else{
        interval = env.PUBLIC_PING_INTERVAL
    }
}
catch{
    console.error("⚠️PUBLIC_PING_INTERVAL is not set, defaulting to 60 seconds")
    interval = "60000"
}
try{
    if(!env.PUBLIC_PINGER_ENDPOINT){
        throw new Error("PUBLIC_PINGER_ENDPOINT is not set, this is required for public pinging to work")
    }
}
catch{
    throw new Error("PUBLIC_PINGER_ENDPOINT is not set, this is required for public pinging to work")
}

export const endpoint = env.PUBLIC_PINGER_ENDPOINT
export const ping_interval = parseInt(interval)

export default lavalinks
