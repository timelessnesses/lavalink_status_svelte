<script lang="ts">

import * as bootstrap from "../../../css/bootstrap.css"
import * as index_css from "../../../css/index.css"
import test from "../../../utils/pinger"
import lavalinks from "../../../config"
import { onMount } from "svelte"
import Chart from "chart.js/auto"

onMount(
    async function(promise){
        let j = document.getElementById("ping_graph")
        let ctx = j.getContext("2d")
        let labels:string[] = []
        let data: number[] = []
        lavalinks.forEach(function(lavalink){
            labels.push(lavalink.host)
            test(lavalink.host, lavalink.port, lavalink.ssl, lavalink.password).then(function(result){
                data.push(result.ping * 10000)
                console.log(result)
            })
        })
        console.log(labels)
        console.log(data)
        let chart = new Chart(
            ctx,
            {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Ping",
                            data: data
                        }
                    ]
                },
                }
        )
        chart.update()
    }
        )


</script>
<h2>Ping graph (No SSL)</h2>
<canvas id="ping_graph"></canvas>
