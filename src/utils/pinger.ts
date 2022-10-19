interface Memory{
    reservable: number;
    used: number;
    free: number;
    allocated: number
}

interface CPU{
    cores: number;
    system_load: number;
    lavalink_load: number;
}

interface LavalinkStatus{
    playing_players: number;
    memory: Memory;
    players: number;
    cpu: CPU;
    uptime: number;
}

interface LavalinkInformation{
    alive: boolean;
    error: string | null | undefined;
    ping: number;
    status: LavalinkStatus;
}

export default async function test(host: string, port: number, ssl:boolean, password: string): Promise<LavalinkInformation> {
    const info = {} as LavalinkInformation
    const result = await fetch(
        `http://media.api.rukchadisa.live/test?host=${host}&port=${port}&ssl=${ssl}&password=${password}`,
        {
            mode: 'cors'
        }
    )
    const json = await result.json()
    console.log(json)
    info.alive = json.alive
    info.error = json.error
    info.ping = json.ping
    info.status = {} as LavalinkStatus
    info.status.playing_players = json.stats.playingPlayers
    info.status.memory = {} as Memory
    info.status.memory.reservable = json.stats.memory.reservable
    info.status.memory.used = json.stats.memory.used
    info.status.memory.free = json.stats.memory.free
    info.status.memory.allocated = json.stats.memory.allocated
    info.status.players = json.stats.players
    info.status.cpu = {} as CPU
    info.status.cpu.cores = json.stats.cpu.cores
    info.status.cpu.system_load = json.stats.cpu.systemLoad
    info.status.cpu.lavalink_load = json.stats.cpu.lavalinkLoad
    info.status.uptime = json.stats.uptime
    return info
}