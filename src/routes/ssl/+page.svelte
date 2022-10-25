<script lang="ts">
    import * as bootstrap from "../../css/bootstrap.css"
    import test from "../../utils/pinger"
    import lavalinks, {ping_interval} from "../../config"
    import { onMount } from "svelte"
    import * as index_css from "../../css/index.css"
    import process_this from "../../utils/process_this"
    onMount(() => {
        function reload(){
            document.title = "SSL | Reloading..."
            document.getElementsByClassName("status")[0].innerHTML = "Status: Reloading Please Wait..."
            document.getElementById("pls_reload")!.innerHTML = "Reloading..."
            document.getElementById("pls_reload")!.disabled = true
            const filtered = lavalinks.filter(lavalink => lavalink.ssl)
            const time = new Date().getTime()
            test(filtered).then(function(result){
                for (const lavalink of result){
                    let found = lavalinks.find(l => l.host === lavalink.info.host && l.port === lavalink.info.port)
                    if(!found){
                        throw new Error("Lavalink not found")
                    }
                    process_this(lavalink, found, document)
                }
            }).catch(function(err){
                console.log(err)
            }).finally(function(){
                document.title = "SSL"
                document.getElementsByClassName("status")[0]!.innerHTML = "Status: Idle"
                document.getElementById("pls_reload")!.innerHTML = "Reload"
                document.getElementById("pls_reload")!.disabled = false
                console.log("Reloaded in " + (new Date().getTime() - time) + "ms")
            })
        }   
        reload()
        setInterval(reload, ping_interval)
        document.getElementById("pls_reload")!.onclick = reload
    })
    </script>
    
        <h1>
            <a href="/">Lavalink Monitor</a>
            <br>A very nice looking dynamic lavalink status
            <br><small>SSL</small>
            <br><h4 id="offline" class="status">Status: Idle</h4>
        </h1>
        <div id="lavalinks">
    
        </div>
        <p>
            <br>
            update every {ping_interval / 1000} seconds or <button type="button" id="pls_reload" class="btn btn-primary">reload</button>
        </p>
<p><a href="https://github.com/timelessnesses/lavalink_status_svelte">source code</a> and thanks <a href="https://github.com/timelessnesses">timelessnesses</a></p>
    
