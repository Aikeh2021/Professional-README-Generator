console.log("Is thing on?");
const inquirer = require("inquirer");
inquirer.prompt([questions])

// array of questions for user
const questions = [
    "What is the name/title of your project?", "What can you tell me about your project? Write a brief description (no more than 2 paragraphs)", "How would a user install your project? Write step-by-step instructions.", "How should a client properly use this product?", "How can I, another developer, contribute to this project? Please write clear and concise guidelines.", "How can I test this application? Please write clear and concise instructions.", "How can you, the website author, be contacted in case of questions?"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
