# Timer
I couldn't find a suitable Timer anywhere in javascript so I decided to make one.
##How it works
First you have to add Timer.js to your html. You can create your own css and make the Timers however you want. 
###Creating the timer
 You create a timer the same way you would create any object. You have to pass the interval into the constructor. 
 The interval is how often, in milliseconds, you want the timer to change, or any other functions to fire.  
 
   ``` javascript
    var timer=new Timer(10);
   ```
   in this example the timer will increment, and fire any other specified functions, every 10 milliseconds.
   
   Also, optionally, you can pass in a UNIQUE id you can use to identify one timer from another.
   ``` javascript
    var timer=new Timer(10, uniqueID);
   ```
There is a global timers[] array which we use to access the timer(s) when the window calls the setInterval function. When you pass in a unique id it sets that id as the index of that timer in the timers[] array
###Adding/Deleting Listeners
\\ Coming Soon
###Start/Stop the timer
\\Coming Soon

