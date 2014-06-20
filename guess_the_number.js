var randomNumber = Math.floor(Math.random() * 100 + 1);
alert("The computer has generated a random number between 1 and 100");
var numberPicked;

while(numberPicked != randomNumber) {
   numberPicked = prompt("Pick a number.");
  if(numberPicked < randomNumber) {
    alert("Your number was too low");
  } else if(numberPicked > randomNumber){
    alert("Your number was too high");
  } else {
    alert("Correct! the number was " + randomNumber);
  }
}

