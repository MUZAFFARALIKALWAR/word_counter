#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt({
    type: "input",
    name: "sentence",
    message: chalk.greenBright("Enter your sentence to count the words.")
});
const words = answer.sentence.trim().split(" ");
// Print the array of words to the console.
console.log(words);
// Print the sentence's word count to the console.
console.log(chalk.yellowBright.bold `your sentence words count is ${words.length}`);
