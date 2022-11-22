//Ex 1

function getStairsMovementDirection(stairNumber, isClimbingStairs ){

 if(stairNumber % 2 === 0 && isClimbingStairs === false){
  return "down";
 }
 if(stairNumber % 2 !== 0 && isClimbingStairs === false){
  return "right";
 }
 if(stairNumber % 2 === 0 && isClimbingStairs === true){
  return "up";
 }
 if(stairNumber % 2 !== 0 && isClimbingStairs === true){
  return "right";
 }

}

//Ex2

function getZigZagMovementDirection(step){
if(step === 0 || step === 6){
 return "up";
}
else if(step === 3 || step === 9){
return "down"
}
else{
  return "right"
}
}

//Ex 3
 
function manuallyControl(){
  var x = event.key;   
      if (x == "a") {
        moveDirection("left");
      }
      if (x == "w") {
        moveDirection("up");
      }
      if (x == "d") {
        moveDirection("right");
      }
      if (x == "s") {
        moveDirection("down");
      }
     if (x == "ArrowUp") {
        moveDirection("up");
      }
      if (x == "ArrowDown") {
        moveDirection("down");
      }
      if (x == "ArrowRight") {
        moveDirection("right");
      }
      if (x == "ArrowLeft") {
        moveDirection("left");
      }
    
}



//Ex4
function givePotion2Answer(list){
 let sum = 0;
 for(let i = 0; i<list.length; i++){
  if(list[i] % 2 === 0){
  sum = sum + list[i];
  }
 }
 return sum;
}

function givePotion3Answer(list){
 let first = list[0]
 for( let i = 0; i<list.length; i++){
  if(first <= list[i]){
    first = list[i];
  }
 }
 return first;
}

function givePotion4Answer(){

}

function givePotion5Answer(hours,minutes,seconds,secondsToAdd){
let a = seconds + secondsToAdd;
if (a >= 60){
  minutes +=1;
  seconds = (seconds + secondsToAdd) - 60;
  if (minutes >=60){
    hours +=1;
  minutes = minutes -60;

  }
}
let time = [hours,minutes,seconds];
return time.join(":");
//console.log(hours + ":" + )
}

function givePotion6Answer(input){
let sum = 0;
 for(let i = 0; i<input.length; i++){
   if( parseInt(input[i])){
   sum += parseInt(input[i]);
 }

}
return sum;
}

function givePotion7Answer(input){
  let sum = 0;
 for(let i = 0; i<input.length; i++){
   if( parseInt(input[i])){
   sum += parseInt(input[i]);
 }

}
return sum;

}

function givePotion8Answer(number){
  let boolean = true;
  if(number > 1){
    for( let i = 2; i< number; i++){
      if(number % i == 0){
        boolean = false;
        break;
      }
    }
  }
return boolean;
}

function givePotion9Answer(){

}

function givePotion10Answer(letterToFind, input){
  for (let position = 0; position < input.length; position++) 
  {
    if (input[position].hasOwnProperty(letterToFind)){
     if( letterToFind in input){
    return [position];
    }
    else { 
      return -1;
      }
   }
}
}

function givePotion11Answer(){


}


function givePotion12Answer(number){
  let sum = 0;


for( let i = 0; i<number.length;i++){
  if(number[i] < 0){
    number[i] = -number[i];
  } 
  sum += number[i];
}  
return sum;
}


function level7Move(){

}

function level8Move(){

}

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };