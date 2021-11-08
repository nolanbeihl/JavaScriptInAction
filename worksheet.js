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





// function diplayMealOption(){
//     let userInput = prompt("What is the current time?: ");
//     switch(userInput){
//         case userInput < "1200":
//             console.log("It is breakfast time so you can have a " + aFavoriteMeal[0]);
//             break;
//         case userInput > "1200" < "1700":
//             console.log("It is lunch time so you can have " + aFavoriteMeal[1]);
//             break;
//         case userInput > "1700":
//             console.log("It is dinner time so you can have a " + aFavoriteMeal[2]);
//             break;
//         default:
//             console.log("I don't think you entered a valid time, please try again");
//             diplayMealOption();
//             break;
//     }
// }

// diplayMealOption();
