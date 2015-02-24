var backgrounds=["darkred","darkblue", "darkgreen", "black"];
var foregrounds=["red","lightblue", "lightgreen", "yellow"];
var timers=[];
$(document).ready(setUp); // End Document Ready
function setUp()
{
makeTimers(4);

 }
function makeTimers(number)
{

	for(var i=0; i<number; i++)
	{	$("#timers").append("<div class=element id='timer_container"+(i+1)+"'></div>")
		//console.log("making timer "+(i+1));
		timers[i]=new Timer(1000,i);
		var timerGui="<div class='timer' id='timer"+(i+1)+"'style='background-color:"+backgrounds[i]+"; color:"+foregrounds[i]+"'>0:00.00</div><button id='timer"+(i+1)+"startButton' Style='width:100%; height:32%;'>Start Time</button></div>";
		$("#timer_container"+(i+1)).append(timerGui);
		$("#timer"+(i+1)+"startButton").click([$("#timer"+(i+1)+"startButton"),i],startStopTimer)
		//$(document).on("increment",["#timer_container"+(i+1),i], updateTimer)
	}
}
function startStopTimer(event)
{
	var button=event.data[0];
	var index=event.data[1];
	
	if(button.text()==="Start Time")
	{
		button.text('Stop Time');
		timers[index].start();
	}
	else
	{
		button.text('Start Time');
		timers[index].stop();
	}
}


/*function updateTimer(event)
{
	var Gui=event.data[0]
	//console.log("GUI: "+Gui);
	//$(Gui).text(timers[event.data[1]]);
}*/