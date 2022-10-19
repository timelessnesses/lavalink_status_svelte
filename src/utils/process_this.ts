import { type LavalinkInformation } from "./pinger"
import { type Lavalink } from "../config"
import formatBytes from "./bytes_to_readable"

export default function process_this(result:LavalinkInformation, lavalink:Lavalink, document: Document): void {

    let element = document.getElementById(lavalink.host)
    let lavalinks_div = document.getElementById("lavalinks")
    if (lavalinks_div == null){
        lavalinks_div = document.createElement("div")
        lavalinks_div.id = "lavalinks"
        document.body.appendChild(lavalinks_div)

    }
    if(element == null){
        element = document.createElement("div")
        element.id = lavalink.host
        if(lavalinks_div != null)
        {
        lavalinks_div.appendChild(element)
        }else{
        console.log("lavalinks_div is null")
        return
        }
    }
    element.innerHTML = `<h3>${lavalink.host}:${lavalink.port} is <span id="${result.alive ?"alive" : "offline"}">${result.alive ?"alive" : "offline"}</span></h3>`
    const section_of_lavalink = document.createElement("section")
    section_of_lavalink.id = result.alive ? "alive_section" : "offline_section"
    section_of_lavalink.innerHTML = `<h4>Status for ${lavalink.host}</h4>`
    section_of_lavalink.innerHTML += `<p>Players: ${result.status.playing_players}/${result.status.players}</p>`
    section_of_lavalink.innerHTML += `<p>Uptime: ${result.status.uptime}</p>`
    section_of_lavalink.innerHTML += `<p>Memory Allocated: ${formatBytes(result.status.memory.allocated)}</p>`
    section_of_lavalink.innerHTML += `<p>Memory Free: ${formatBytes(result.status.memory.free)}</p>`
    section_of_lavalink.innerHTML += `<p>Memory Reservable: ${formatBytes(result.status.memory.reservable)}</p>`
    section_of_lavalink.innerHTML += `<p>Memory Used: ${formatBytes(result.status.memory.used)}</p>`

    element.appendChild(section_of_lavalink)
}