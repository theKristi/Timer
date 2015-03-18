/** An Array of background colors for GUI of timers **/
var backgrounds=["darkred","darkblue", "darkgreen", "black"];

/** An Array of foreground colors for GUI of timers **/
var foregrounds=["red","lightblue", "lightgreen", "yellow"];


/**This function is called when the document loads**/
$(document).ready(setUp); // End Document Ready

/**
*This function handles what happens to build the page
**/
function setUp()
{
makeTimers(4);
//addDeleteListener();
}

/**
* This function makes the specified number of timers and adds them to the global array then creates the corresponding GUI and event listeners
*@param number{integer} The number of timers to build  	
**/
function makeTimers(number)
{

	for(var i=0; i<number; i++)
	{	$("#timers").append("<div class=element id='timer_container"+(i+1)+"'></div>")
//console.log("making timer "+(i+1));
		var timer=new Timer(10,"timer"+(i+1));
		var timerGui="<div class='timer' id='timer"+(i+1)+"'style='background-color:"+backgrounds[i]+"; color:"+foregrounds[i]+"'>0:00.00</div><button id='timer"+(i+1)+"startButton' Style='width:100%; height:32%;'>Start Time</button></div>";
		$("#timer_container"+(i+1)).append(timerGui);
		$("#timer"+(i+1)+"startButton").click([$("#timer"+(i+1)+"startButton"),timer.ID],startStopTimer)
		//$(document).on("increment",["#timer_container"+(i+1),i], updateTimer)
		timer.addListener(updateTimer,[timer]);
		addDeleteListenerButton(i,timer);
	}
}
function addDeleteListenerButton(i,timer)
{
	
	$("#buttons").append("<button id='addDeleteListenerButton"+i+"'Style='width:15%; height:64%;'> Delete Listener "+(i+1)+"</button>");
	$("#addDeleteListenerButton"+i).click([timer,$("#addDeleteListenerButton"+i)],addDeleteListener);
	
}
function addDeleteListener(event)
{
	var timer=event.data[0];
	var button=event.data[1];
	var index=parseInt(button.selector.charAt(button.selector.length-1))+1;
	
	if(button.text().indexOf("Delete Listener")>-1)
	{
		button.text('Add Listener '+index);
		var deleted=timer.deleteListener(updateTimer);
		console.log("deleted: "+deleted);
	}
	else
	{
		button.text('Delete Listener '+ index);
		timer.addListener(updateTimer,[timer]);
	}
	
}
/** 
* This function handles what happens when the user clicks the stop/start button
* @param event{Event} The onClick event that triggered this function.
**/
function startStopTimer(event)
{
	var button=event.data[0];
	var timer=timers[event.data[1]];
	
	if(button.text()==="Start Time")
	{
		button.text('Stop Time');
		timer.start();
	}
	else
	{
		button.text('Start Time');
		timer.stop();
	}
}

function updateTimer(timerArray)
{
	var timer=timerArray[0];
//console.log("updateTimer:"+timer)
$("#"+timer.ID).text(timer);
}