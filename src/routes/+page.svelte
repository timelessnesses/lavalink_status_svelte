<script lang="ts">
import * as bootstrap from "../css/bootstrap.css"
import test from "../utils/pinger"
import lavalinks from "../config"
import { onMount } from "svelte"
import * as index_css from "../css/index.css"
onMount(() => {
    function reload(){
    lavalinks.forEach(function(lavalink){
        
        const j = test(lavalink.host, lavalink.port, lavalink.ssl, lavalink.password).then(function(result){
            console.log(result)
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
            section_of_lavalink.innerHTML = `<h4>Stats</h4><br>Ping: ${(result.ping*10000).toFixed(3)}<br>Uptime: ${result.status.uptime}<br>Memory: ${result.status.memory.free} / ${result.status.memory.allocated}<br>Players: ${result.status.players}<br>Playing Players: ${result.status.playing_players}<br>System Load: ${result.status.cpu.system_load}`
            element.appendChild(section_of_lavalink)
        }).catch(function(err){
            console.log(err)
            
        })
        
    })
}
    setInterval(reload, 5000)
    document.getElementById("pls_reload")!.onclick = reload
})
</script>

    <h1>
        <a href="/">Lavalink Monitor</a>
        <br>A very nice looking dynamic lavalink status
    </h1>
    <div id="lavalinks">

    </div>
    <p>
        <br>
        update every 5 seconds or <button type="button" id="pls_reload" class="btn btn-primary">reload</button>
    </p>
