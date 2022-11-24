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
 
let keyPressed = false;
function manuallyControl(keyDown) {
  if (keyPressed === false) {
    switch (keyDown) {
      case "ArrowRight":
        moveDirection("right");
        break;

      case "ArrowLeft":
        moveDirection("left");
        break;

      case "ArrowUp":
        moveDirection("up");
        break;

      case "ArrowDown":
        moveDirection("down");
        break;
      
      case "KeyQ":
        keyPressed = true;
    };
  } else {
    switch (keyDown) {
      case "KeyD":
        moveDirection("right");
        break;
      
      case "KeyA":
        moveDirection("left");
        break;

      case "KeyW":
        moveDirection("up");
        break;

      case "KeyS":
        moveDirection("down");
        break;
      
      case "KeyQ":
        keyPressed = false;
    };
  };
}; 



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


function givePotion4Answer(input, toCapitalize){
input;
toCapitalize;
let string = input.split("");
let rez = [];
 for (let i = 0; i< string.length; i++){
  for(let j = 0; j<string[i].length;j++){
  if(string[i] === toCapitalize[j])
  {
    rez.push(string[i].toUpperCase());
  }
  else{
    rez.push(string[i]);
  }
 }
}
return rez.join("");

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


function givePotion9Answer(list) {
  let smallest = list.sort((a, b) => a - b).slice(0, 2)
  let sum = 0;
  for (let i = 0; i < smallest.length; i++) {
    if (parseInt(smallest[i])) {
      sum += parseInt(smallest[i]);
    }
  }
  return sum;
}


function givePotion10Answer(letterToFind, input){
    let myArr = input.split("");
    let k = [];
    let j = 0
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] === letterToFind) {
        k[j] = i + 1;
        j++;
      }
    }
    if (k[0] > 0) {
      return k[0] - 1
    } else return -1
  }


function givePotion11Answer(input, letterToReplace, letterToPutInstead){
let array = input.split("");
for( let i = 0; i < array.length; i++){
  if(array[i] === letterToReplace){
   array[i] = letterToPutInstead;
  }
}
return array.join("")
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



//Level 7


             //[x, y] => position[0]=x si position[1]=y
let position = [0, 0];
let buffer = [[0,0]]; // Sir de memorare pozitii dupa miscarea initiala din lvl, cele din if

function move( string){
  return moveDirection(string);
}


function hasMovedToTile(direction, tileToCheck) {
let testTile = []; //[x,y]
if( direction === "right"){
  testTile = [tileToCheck[0]+1,tileToCheck[1]];// pt dreapta x + 1 ---> y nu se modif.
}
else if( direction === "left"){
  testTile = [tileToCheck[0]-1,tileToCheck[1]];
}
else if(direction === "up"){
  testTile = [tileToCheck[0], tileToCheck[1]+1];
}
else if(direction === "down"){
  testTile = [tileToCheck[0], tileToCheck[1]-1];
}

for ( let i = 0; i < buffer.length ; i++){
  if(testTile[0] == buffer[i][0] && testTile[1] == buffer[i][1]){
    return true;
  }
}
return false;
}

function level7Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince,simpleMovment = false){

if((elementLeftOfPrince === 11 || elementLeftOfPrince === 99) && !hasMovedToTile('left', position)){
position[0] -=1;
buffer.push([position[0],position[1]]);

//if(simpleMovment === false){
//return movment("left");
//else
//return "left"
//}
return simpleMovment ? "left" : move("left");
}
if((elementRightOfPrince === 11 || elementRightOfPrince === 99) && !hasMovedToTile('right', position)){
position[0] += 1;
buffer.push([position[0],position[1]]);
return simpleMovment ? "right" : move("right");
}
if((elementUpOfPrince === 11 || elementUpOfPrince === 99) && !hasMovedToTile('up', position)){
position[1] += 1;
buffer.push([position[0],position[1]]);
return simpleMovment ? "up" : move("up");
}
if((elementDownOfPrince === 11 || elementDownOfPrince === 99) && !hasMovedToTile('down', position)){
position[1] -= 1;
buffer.push([position[0],position[1]]);
return simpleMovment ? "down" : move("down");
}
}




//Level 8

function level8Move(gameMap){
  console.log(gameMap);
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