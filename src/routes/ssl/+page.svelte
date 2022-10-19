<script lang="ts">
    import * as bootstrap from "../../css/bootstrap.css"
    import test from "../../utils/pinger"
    import lavalinks from "../../config"
    import { onMount } from "svelte"
    import * as index_css from "../../css/index.css"
    import process_this from "../../utils/process_this"
    onMount(() => {
        function reload(){
        lavalinks.forEach(function(lavalink){
            if (!lavalink.ssl){
                return
            }
            console.log(lavalink.host)
            
            const j = test(lavalink.host, lavalink.port, lavalink.ssl, lavalink.password).then(function(result){
                process_this(result, lavalink, document)
            }).catch(function(err){
                console.log(err)
                
            })
            
        })
    }   reload()
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
    