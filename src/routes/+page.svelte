<script lang="ts">
import * as bootstrap from "../css/bootstrap.css"
import index_css from "../css/index.css"
import {onMount} from "svelte"

function redirect_nossl(){
    window.location.href = window.location.href + "nossl"
}

function redirect_ssl(){
    window.location.href = window.location.href + "ssl"
}

</script>

    <h1>
        <a href="/">Lavalink Monitor</a>
        <br>A very nice looking dynamic lavalink status
    </h1>

    <h3>
        Please choose a lavalink to monitor between
        <button id="nossl" class="btn btn-info" on:click={redirect_nossl}>no ssl</button> or 
        <button id="ssl" class="btn btn-info" on:click={redirect_ssl}>ssl</button>
    </h3>

<p><a href="https://github.com/timelessnesses/lavalink_status_svelte">source code</a> and thanks <a href="https://github.com/timelessnesses">timelessnesses</a></p>
