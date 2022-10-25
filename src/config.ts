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
        host: "lavalink.oops.wtf",
        port: 443,
        ssl: true,
        password: "www.freelavalink.ga",
        information: {
            name: "OGGY#9889",
            website: "https://www.freelavalink.ga/"
        }
    },
    {
        host: "node1.kartadharta.xyz",
        port: 443,
        ssl: true,
        password: "kdlavalink",
        information: {
            name: "ErrorDOC404",
            website: "https://github.com/ErrorDoc404"
        }
    },
    {
        host: "node1.gglvxd.tk",
        port: 443,
        ssl: true,
        password: "free",
        information: {
            name: "GGLVXD",
            website: "https://discord.gg/JHqvvcRbrS"
        }
    },
    {
        host: "node2.gglvxd.tk",
        port: 443,
        ssl: true,
        password: "free",
        information: {
            name: "GGLVXD",
            website: "https://discord.gg/JHqvvcRbrS"
        }
    },
    {
        host: "lava.islantay.tk",
        port: 443,
        ssl: true,
        password: "AmeliaWatsonisTheBest**!",
        information: {
            name: "Islantay",
            website: "https://github.com/Dep0s1t"
        }
    },
    {
        host: "jp-lava.islantay.tk",
        port: 443,
        ssl: true,
        password: "AmeliaWatsonisTheBest**!",
        information: {
            name: "Islantay",
            website: "https://github.com/Dep0s1t"
        }
    },
    {
        host: "lavalink.botsuniversity.ml",
        port: 443,
        ssl: true,
        password: "mathiscool",
        information: {
            name: "MathisCool#8659, AceTheAwesome#3366",
            website: "https://lavalink-list.botsuniversity.ml/"
        }
    },
    {
        host: "lavalink2.botsuniversity.ml",
        port: 443,
        ssl: true,
        password: "mathiscool",
        information: {
            name: "MathisCool#8659, AceTheAwesome#3366",
            website: "https://lavalink-list.botsuniversity.ml/"
        }
    },
    {
        host: "krn.2d.gay",
        port: 443,
        ssl: true,
        password: "AWP)JQ$Gv9}dm.u",
        information: {
            name: "melike2d",
            website: "https://2d.gay"
        }
    },
    {
        host: "lavalink.oops.wtf",
        port: 2000,
        ssl: false,
        password: "www.freelavalink.ga",
        information: {
            name: "OGGY#9889",
            website: "https://www.freelavalink.ga/"
        }
    },
    {
        host: "138.201.56.61",
        port: 1033,
        ssl: false,
        password: "whyareyougay",
        information:{
            name:"Scattypie#0001",
            website:"https://discord.gg/NUhWvA7paX"
        }
    },
    {
        host:"lavalink.hatry4.xyz",
        port: 10424,
        ssl: false,
        password: "youshallpasslol",
        information:{
            name: "Hatry4",
            website: "https://www.hatry4.xyz/"
        }
    },
    {
        host: "lavalink4africa.islantay.tk",
        port: 8880,
        password: "AmeliaWatsonisTheBest**!",
        ssl: false,
        information: {
            name: "Islantay",
            website: "https://github.com/Dep0s1t"
        }
    },
    {
        host: "uk.lavalink.platinumhost.uk",
        port: 2333,
        password: "lavalink",
        ssl: false,
        information:{
            name:"ItsLeon15",
            website:"https://github.com/ItsLeon15"
        }
    },
    {
        host: "lava1.horizxon.studio",
        port: 80,
        password: "horizxon.studio",
        ssl:false,
        information:{
            name:"Draxler#6920",
            website:"https://horizxon.studio"
        }
    },
    {
        host: "lava2.horizxon.studio",
        port: 80,
        password: "horizxon.studio",
        ssl:false,
        information:{
            name:"Draxler#6920",
            website:"https://horizxon.studio"
        }
    },
    {
        host: "lava3.horizxon.studio",
        port: 80,
        password: "horizxon.studio",
        ssl:false,
        information:{
            name:"Draxler#6920",
            website:"https://horizxon.studio"
        }
    },
    {
        host: "lava4.horizxon.studio",
        port: 80,
        password: "horizxon.studio",
        ssl:false,
        information:{
            name:"Draxler#6920",
            website:"https://horizxon.studio"
        }
    },
    {
        host: "45.134.11.134",
        port: 1026,
        password: "youshallnotpass",
        ssl: false,
        information:{
            name:"invaliduser#9707",
            website: "https://discord.gg/mTp8suHPaR"
        }
    },
    {
        host: "149.129.215.50",
        port: 2333,
        password: "alfarimusic",
        ssl: false,
        information:{
            name:"Alfari#3465",
            website: "https://discord.gg/ZNKNY3RpRg"
        }
    },
    {
        host: "game.cyberdev.host",
        port: 27005,
        password: "discord.cyberdev.host",
        ssl: false,
        information:{
            name:"Radiant#1106",
            website: "https://discord.cyberdev.host/"
        }
    },
    {
        host: "lv.cowcat.cf",
        port: 2333,
        password: "derpylava",
        ssl: false,
        information:{
            name:"derpy#1000",
            website: "https://discord.gg/YHS6nYEPB4"
        }
    },
    {
        host: "139.162.196.121",
        port: 1152,
        password: "rxnationgamingyt",
        ssl: false,
        information:{
            name:"RXNationGaming#2896",
            website: "https://rxnationgaming.cf/"
        }
    },
    {
        host: "135.181.140.203",
        port: 25627,
        password: "LavaNode2",
        ssl: false,
        information:{
            name:"RXNationGaming#2896",
            website: "https://rxnationgaming.cf/"
        }
    },
    {
        host: "krn.2d.gay",
        port: 80,
        password: "AWP)JQ$Gv9}dm.u",
        ssl: false,
        information:{
            name:"melike2d",
            website: "https://2d.gay"
        }
    },
    {
        host: "musictune.miraclecherrypie.cf",
        port: 8880,
        password:"KawaiiOnyanisbetter!!!!",
        ssl: false,
        information:{
            name: "MiracleCherryPie",
            website: "https://github.com/MiracleCherryPie"
        }
    },
    {
        host: "moe.aikomechawaii.live",
        port: 5052,
        password: "aikomechawaii.live",
        ssl: false,
        information:{
            name: "AikoNee#1652",
            website:"https://github.com/AikoNee"
        }
    },
    {
        host: "158.69.54.158",
        port: 31593,
        password: "leefernando",
        ssl: false,
        information:{
            name: "Fernandopek21#6236",
            website: "https://discord.gg/SzP9BdFPYF"
        }
    },
    {
        host: "57.128.136.144",
        port: 30017,
        password: "youshallnotpass",
        ssl: false,
        information:{
            name: "Fernandopek21#6236",
            website: "https://discord.gg/SzP9BdFPYF"
        }
    },
    {
        host: "node1.lewdhutao.tech",
        port : 1183,
        password : "lewdhutao",
        ssl: false,
        information:{
            name: "LewdHutao",
            website: "https://lewdhutao.me"
        }
    },
    {
        host: "node2.lewdhutao.tech",
        port : 443,
        password : "lewdhutao",
        ssl: true,
        information:{
            name: "LewdHutao",
            website: "https://lewdhutao.me"
        }
    },
    {
        host : "lavalink.snoopee.co.uk",
        port : 2333,
        password : "realserver",
        ssl: false,
        information:{
            name: "Snoopee110",
            website: "https://snoopee.co.uk"
        }
    }
]

let interval = null

try{
    if(!env.PUBLIC_PING_INTERVAL){
        console.warn("⚠️PUBLIC_PING_INTERVAL is not set, defaulting to 30 seconds")
        interval = "30000"
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