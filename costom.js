"use strict";
//.........adult and minor checker............


// function userProfile (){
//     let userName = prompt("EnterYour Name:");
//     let userAge = Number(prompt("EnterYour Age:"));
//     if (userAge>=18){
//         return "Adult"
//     } else {
//        return "Minor"
//     }
    
// }
// let result = userProfile();
// console.log(" You are a " + result + " person.");




//...................even odd number .................

// function numberChecker(){
//     let number = Number(prompt("Enter a number:"));
//     if (isNaN(number)){
//         console.log("Indalid Number.")
//     }
//     else if(number%2===0){
//         return "Even Number"
//     } else {
//         return "Odd Number"
//     }
// }
//  let result = numberChecker();
//  console.log("Your Number is " + result);





// ...............positive negative number checker............... 


// function pnChecker (){
//     let number = Number(prompt("Enter a Number:"));
//     if (isNaN(number)){
//         return "Invalid Number"
//     }else if(number > 0){
//         return "Positive Number"
//     }else if(number < 0){
//         return "Negative Number"
//     } else{return "Zero"}
// }
// let result = pnChecker();
// console.log("Your Number is "+ result);



//...............driving license..............
// function userProfile(){
//     let userName = prompt("Enter Your Name:");
//     let userAge = Number(prompt("Enter Your Age:"));
    
    
//     if (isNaN(userAge)) {
//         console.log("Invalid age input.") ;
//     }else if(userAge>=18){
//         console.log("You are eligible for a driving license.") ;
//     } else {
//         console.log("Sorry, you are not eligible for a driving license.") ;
//     }
// }
// userProfile();

let userName;
function userProfile(){
    userName = prompt("Enter Your Name:");
    let userAge = Number(prompt("Enter Your Age:"));
    
    
    if (isNaN(userAge)) {
        return ("Invalid age input.") ;
    }else if(userAge>=18){
        return ("You are eligible for a driving license.") ;
    } else {
        return ("Sorry, you are not eligible for a driving license.") ;
    }
}
let result = userProfile();
console.log(userName+" " + result);











