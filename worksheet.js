dayOfWeek = 'Monday'
console.log(dayOfWeek);
dayOfWeek = 'Friday'
console.log("I can't wait for " + dayOfWeek);

animalInput = prompt("What is your favorite animal?");
colorInput = prompt("What is your favorite color?");

console.log("I've never seen a " + colorInput + " " + animalInput);

//# Breakfast Buritto, Drive Thru Value Menu, Steak

timeOfDay = "1200"
let aFavoriteMeal = ["burrito", "Drive Thru Value Menu", "Steak"];

let userInput = prompt("What is the current time?: ");

if (userInput < timeOfDay ){
    alert("It is breakfast time, you can have a " + aFavoriteMeal[0]);
}
else if (userInput > timeOfDay , userInput < "1700") {
    alert("It's lunch time, you can have a " + aFavoriteMeal[1]);
}
else {
    alert("It must be dinner time, you should have a " + aFavoriteMeal[2]);
}

 function getRandomNumber(min,max) {
     return Math.floor(Math.random() * (max - min +1)) + min;
 }

numberPicked = getRandomNumber(0,10)

if (numberPicked < 3) {
    console.log("Beatles");
}
else if (numberPicked < 6){
    console.log("Stones");
}
else if (numberPicked < 9){
    console.log("Floyd");
}
else {
    console.log("Hendrix");
}

for (let i = 1; i<8; i++){
    alert("JavaScript is cool!" + i)
}

for (let i = 0; i<11; i++){
    alert(i)
}

for (let i =1; i<11 ; i++){
   if (i%2 == 0){
       alert("Goodbye");
   }
    else {
        alert("hello");
    }
}
let isInstructorAwesome = true;

while (isInstructorAwesome) {
    console.log("Are you a good Instructor? ");
    isInstructorAwesome = false;
}
function printMovieName(){
    favoriteMovie = "Tucker";
    console.log(favoriteMovie);
}
printMovieName();

function userFavoriteBand(){
    let choice;
    choice = prompt("What is your favorite band? ")
    return choice;
}
let userBandChoice = userFavoriteBand();
console.log(userBandChoice);

function concertDisplay(musicalAct){
    myStreet = prompt("What street do you live on? ");
    alert("It would be great if " + musicalAct + " played a show on " + myStreet);
}

concertDisplay(userBandChoice);

desktopItems = ["camera", "files", "monitor", "phone"];

console.log(desktopItems[1]);

desktopItems.push("Infinity Gauntlet");

for (desktopItems;;){
    console.log(desktopItems);

}


