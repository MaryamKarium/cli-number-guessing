import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
       name: "userGuessedNumber",
       type: "number",
       message: "Guess a number between 1-10:",
    

    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number");
}else {
    console.log("You guessed wrong number");
}