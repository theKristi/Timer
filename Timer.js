/*Timer.js*/
//var CurrentTimer;
	Timer=function(intrval,id)
	{
		this.currentTime=0;
		this.intervalTime=intrval;
/*this.incrementEvent=new CustomEvent('increment',{detail:{timer:this}});
document.addEventListener('increment',this.increment,false)*/
		this.listeners=[]
		this.ID=id;
	this.start=function()
	{
	
	//CurrentTimer=this;
		this.currentTime=0;
//console.log("Time started:"+this.currentTime);
		this.interval=setInterval(function(){ 
		var time=timers[id]; 
		time.dispatchIncrement(time.incrementEvent)},
		this.intervalTime);
	}
	Timer.prototype.increment=function(e)
	{
		var timer=e.detail.timer;
		timer.currentTime++;
console.log("ID: "+timer.ID+" currTime: "+ timer.currentTime);
	}

	Timer.prototype.dispatchIncrement=function(event)
	{
//document.dispatchEvent(event);
//console.log("dispatch inc");
	//this.increment();
	} 
	Timer.prototype.stop=function()
	{
		clearInterval(this.interval);
//alert("Timestopped:");
	
	}
	Timer.prototype.getTime=function()
	{
		return this.currentTime;
	}
	Timer.prototype.toString=function()
	{ 
		var time;
		var minutes=Math.floor(this.currentTime/60000);
		time=this.currentTime%60000;
		var seconds=Math.floor(time/100);
		time=time%100;
//console.log("Minutes: "+minutes+" Seconds: "+seconds+" mili: "+time);
		return ""+minutes+":"+seconds+"."+time;

	}
	Timer.prototype.addListener=function(toadd,param)
	{
		if(typeof toadd==='function')
			this.listeners.push(new Function(toadd, param));
		else
		{
			alert("cannot add listener"+toadd+"because it is not a function" )
		}
	}
Function=function(fun,param)
{
	if(typeof fun==='function')
	{	
	func:fun;
	params:param;
	}
call: function()
	{
		this.func(this.params);
	}	
}
Function.prototype.call=function()
{
	this.func(this.params);
}
};
