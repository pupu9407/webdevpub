<script lang="ts">
	import {Clock} from "./clock.js"
	import { fade, fly, slide, draw } from "svelte/transition";
	import { spring, tweened } from "svelte/motion";
	import { listen } from "svelte/internal";

let clock1 = new Clock(1,0)
let clock2 = new Clock(2,0)
let clock3 = new Clock(3,0)
let clock_list = [clock1,clock2,clock3]
let displaylist = ["00:00","00:00","00:00"]
let alarmTrigger=""
let time = []
let times = []
let alarmTimer = ["",0]
let reduceAlarmTime

let minutes = spring(((clock1.hour * 60) + clock1.minute));

setInterval(tick, 1000,0);
setInterval(tick, 1000,1);
setInterval(tick, 1000,2);
function tick(num){
	displaylist[num] = clock_list[num].tick()
	clock_list[num]=clock_list[num]
	minutes.set(parseInt(clock1.hour) * 60 + parseInt(clock1.minute));
	times = time[num]
	clock_list[num].alarmHour = times[0]
	clock_list[num].alarmMinute = times[1]	
	if(alarmTimer[1] != 0 && alarmTimer[0]==num){
		reduceAlarmTime=alarmTimer[1]
		reduceAlarmTime-=1
		alarmTimer[1] = reduceAlarmTime
	}
	if(time[num] == clock_list[num].time()) {
		alarmTrigger="ALARM"
		alarmTimer = [num,5]
		time[num]=0
	}
	else if (alarmTimer[1] <= 0) {
		alarmTrigger=""
	}
	}
</script>

<main>
	<svg class="clock" viewBox="-100 -10 200 35">
        <circle class="clock-face" r="90" />
		{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
		<line class="hourLine" y1="90" y2="78" transform="rotate({6 * (minute)})"     />
			{#each [1,2,3,4] as offset}
				<line class="minuteLine" y1 ="90" y2 ="78" transform="rotate({6 * (minute + offset)})"/>
			{/each}
		{/each}
		<line class="hour"  y1=60 y2=-12 transform="rotate({(6 / 12) * $minutes - 180})"/>
		
		<line class="minute" y1=72 y2=-24 transform="rotate({6 * $minutes - 180})"/>
	</svg>
	<h1>{alarmTrigger}</h1>
	<div>
	<p>{displaylist[1]}</p>
	</div>
	<div class="thirdClock">
		<h2>{displaylist[2]}</h2>
	</div>
	<div class="clickerDiv">
	<button class="clicker" on:click={()=>tick(0)}> 1 </button>
	<button class="clicker" on:click={()=>tick(1)}> 2 </button>
	<button class="clicker" on:click={()=>tick(2)}> 3 </button>
	</div>
	<div class="alarmDiv">
		<input style= "top:-500px; "type="time" class="setAlarm" bind:value={time[0]}>
		<input style= "top:-350px; "type="time" class="setAlarm" bind:value={time[1]}>
		<input style= "top:-200px; "type="time" class="setAlarm" bind:value={time[2]}>
	</div>
</main>

<style>
	:global(body) {
		
		background: linear-gradient(100deg,aqua,yellow,red);
	}
@keyframes example {
  0%     {background-color: white;color: red;}
  50%    {background-color: red;color:white;}
  100%   {background-color: white;color: red}
}
	
	main {
		text-align: center;	
	}
	h1 {
		position:fixed;	
		bottom: -35%;
		left: -1%;
		text-transform: uppercase;
		font-size: 30em;
		font-weight: 100;
		animation-name: example;
  		animation-duration:1s;
		animation-iteration-count: infinite;
		min-width: 105%;
		z-index:5
	}	
	p{
		display:inline-block;
		color: red;
		font-size: 3.5em; 
		border-radius: 10%;
		margin: 50;
		padding: 5px;
		background-color: black;		
	}
	h2{
		font-size:2em;;
		color: blueviolet;
	}
	.setAlarm{
		position: relative;
		left: 1600%;
	}
	.clock{
		position: flex;
		min-width: 10px;
		max-width: 10px;
		min-height: 200px;
		max-width: 200px;
	}
	.clock-face {
        stroke: #333;
        fill: none;
    }
	.alarmDiv {
	position:absolute;
	left: -10%;
	max-width: 5%;	
}

    .hourLine {
        stroke: rgb(56, 56, 56);
        stroke-width: 0.8;
    }
    .minuteLine {
        stroke: #333;
        stroke-width: 0.4;
    }
    .minute {
        stroke: #333;
        stroke-width: 0.6;
    }
    .hour {
        stroke: #333;
        stroke-width: 1.2;
    }

	@media (max-width: 20px) {
		:global(body) {
			max-height: 100%;
			max-width: 100%;
			flex-direction: column;
		}
	}
</style>