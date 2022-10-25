import { type Lavalink, endpoint } from "../config"

interface Memory{
    reservable: number
    used: number
    free: number
    allocated: number
}

interface CPU{
    cores: number
    system_load: number
    lavalink_load: number
}

interface LavalinkStatus{
    playing_players: number
    memory: Memory
    players: number
    cpu: CPU
    uptime: number
}

interface PartialLavalinkInformation{
    host: string
    port: number
    ssl: boolean
    password: string
}

export interface LavalinkInformation{
    alive: boolean
    error: string | null | undefined
    ping: number
    status: LavalinkStatus
    info: PartialLavalinkInformation
}


export default async function test(lavalinks: Lavalink[]): Promise<Array<LavalinkInformation>> {
    const result_ = [] as LavalinkInformation[]
    const body = []
    for (const lavalink of lavalinks) {
        body.push(
            {
                host: lavalink.host,
                port: lavalink.port,
                ssl: lavalink.ssl,
                password: lavalink.password,
            }
        )
    }
    const result = await fetch(
        endpoint,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }
    )
    const actual_result_list = await result.json()
    for (const json of actual_result_list) {
        const info = {} as LavalinkInformation
        info.alive = json.alive
        info.error = json.error
        info.ping = json.ping
        info.status = {} as LavalinkStatus
        info.status.memory = {} as Memory
        info.info = json.stuff as PartialLavalinkInformation
        if(json.alive){
            info.status.playing_players = json.stats.playingPlayers
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
        }
        result_.push(info)
    }
    return result_
}
