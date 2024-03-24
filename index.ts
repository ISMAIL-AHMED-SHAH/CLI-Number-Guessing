#!/usr/bin/env node

import inquirer from "inquirer";

console.log("\t\nWelcome to Shahi Number Guessing Game\n\t")

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a number between 1 - 10:",
},
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulation! You guessed a right number.");
    
}
else {
    console.log("Oopsss!!! Your guessed number is wrong, plz try again.");
}



