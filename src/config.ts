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

const lavalinks: Lavalink[] = [
    {
        host: "lavalink.api.rukchadisa.live",
        port: 80,
        ssl: false,
        password: "youshallnotpass",
        information: {
            name: "timelessnesses#9443",
            website: "https://rukchadisa.live"
        }
    },
    {
        host: "57.128.136.143",
        port: 30411,
        ssl: false,
        password: "maybeiwasboring",
        information: {
            name: "MR EXTINCT CODE'S#6646",
            website: null
        }
    },
    {
        host: "thisisnotavalidhost.com",
        port: 80,
        ssl: false,
        password: "youshallnotpass",
        information: {
            name: "timelessnesses#9443",
            website: "https://rukchadisa.live"
        }
    }

]

export default lavalinks