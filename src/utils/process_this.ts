import { type LavalinkInformation } from "./pinger"
import { type Lavalink } from "../config"
import formatBytes from "./bytes_to_readable"
import moment from "moment"

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
    element.appendChild(section_of_lavalink)
    let uptime = 'N/A'
    if(result.alive){
       uptime = moment.duration(result.status.uptime, 'milliseconds').humanize() 
    }
    section_of_lavalink.innerHTML = `<h4>Status for ${lavalink.host}</h4>`
    section_of_lavalink.innerHTML += `<p>Uptime: ${uptime}</p>` // im too lazy to make my own time humanizer
    section_of_lavalink.innerHTML += `<p>Ping: ${(result.ping * 1000).toFixed(3)}ms</p>`
    if(result.alive){
        section_of_lavalink.innerHTML += `<p>Players: ${result.status.playing_players}/${result.status.players}</p>`
        section_of_lavalink.innerHTML += `<p>Memory Allocated: ${formatBytes(result.status.memory.allocated)}</p>`
        section_of_lavalink.innerHTML += `<p>Memory Free: ${formatBytes(result.status.memory.free)}</p>`
        section_of_lavalink.innerHTML += `<p>Memory Reservable: ${formatBytes(result.status.memory.reservable)}</p>`
        section_of_lavalink.innerHTML += `<p>Memory Used: ${formatBytes(result.status.memory.used)}</p>`
        section_of_lavalink.innerHTML += `<p>CPU cores: ${result.status.cpu.cores}</p>`
        section_of_lavalink.innerHTML += `<p>System Load: ${(result.status.cpu.system_load * 100).toFixed(2)}%</p>`
        section_of_lavalink.innerHTML += `<p>Lavalink Load: ${(result.status.cpu.lavalink_load * 100).toFixed(2)}%</p>`   
    }
    const info = document.createElement("section")
    info.id = "info"
    section_of_lavalink.appendChild(info)
    info.innerHTML = `<h4>Info for ${lavalink.host}</h4>`
    info.innerHTML += `<p>Host: ${lavalink.host}</p>`
    info.innerHTML += `<p>Port: ${lavalink.port}</p>`
    info.innerHTML += `<p>Password: ${lavalink.password}</p>`
    info.innerHTML += `<p>Made by: <a href="${lavalink.information?.website}">${lavalink.information?.name}</a></p>`
}
