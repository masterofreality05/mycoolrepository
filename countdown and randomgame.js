//Write a function called countdown that accepts a number as a parameter and every 1000 
//milliseconds decrements the value and console.logs it. 
//Once the value is 0 it should log “DONE!” and stop.

//countDown(4);
// 3
// 2
// 1
// "DONE!"

// i had to view the solution, but studying the anatomy of this code I now understand
//writing notes to demonstate that 

function countDown(time){
  //time is our input, lets decrememnt it in intervals of 1s
  let timer = setInterval(function(){
    //we are storing our interval in a variable.
     //in each interval lets decrement our time argument passed by 1
      time--;
      if(time === 0){
        //if time at any interval is equal to zero print done 
          clearInterval(timer);
          //after we are done we exit and clear the interval
          //we can identify the interval by calling the variable ot which its ID is stored
          console.log("Done!")
      } else {
        //while our time argument has not reached zero we will log the time amount at each interval. 
          console.log(time);
      }
      //even though its far removed, this still the end of the variable declaration of timer,
      //below after the function has been declared, finally the time between each interval is declared and our timer variable declaration is finally complete.
      
  },1000)


}
countDown(4) ///outputs the countdown correctly

function randomGame(){
  let counter = 0;
  //our incrememnt counter
  let shuffle = setInterval(function(){counter ++; let random = Math.random();
  //storing our interval in a variable,
  // we will use the named variable to identify the interval
  //console.log(random) used to view our random generated numbers
  if (random > 0.75){
      //console.log("too big") works perfect
    clearInterval(shuffle);
    //once we hit a number over .75 we end the interval loop
    console.log(counter)}
    //logging our incremented counter to the console gives us the attempts needed to reach a random number before .75
    //our counter is being incremented corrctly
    // our interval loop stops when .75 is reached
  } ,10) 
}

randomGame()
  




