interface Information{
    name: string;
    website: string | null;
}

interface Lavalink{
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
    }
]

export default lavalinks