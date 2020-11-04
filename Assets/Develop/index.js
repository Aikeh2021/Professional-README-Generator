console.log("Is thing on?");
const inquirer = require("inquirer");
// array of questions for user
const questions = [
    "What is the name/title of your project?", "What can you tell me about your project? Write a brief description (no more than 2 paragraphs)", "How would a user install your project? Write step-by-step instructions.", "How should a client properly use this product?", "How can I, another developer, contribute to this project? Please write clear and concise guidelines.", "How can I test this application? Please write clear and concise instructions.", "What is your Github username?", "What is the best email address for users to contact you with questions?"
];
inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name: "projectTitle"
    },
    {
        type: "input",
        message: questions[1],
        name: "projectDescription"
    },
    {
        type: "input",
        message: questions[2],
        name: "projectInstallation"
    },
    {
        type: "input",
        message: questions[3], 
        name: "projectUsage"
    },
    {
        type: "input",
        message: questions[4],
        name: "projectContribution"
    },
    {
        type: "input",
        message: questions[5],
        name: "projectTesting"
    },
    {
        type: "input",
        message: questions[6],
        name: "Github"
    },
    {
        type: "input",
        message: questions[7],
        name: "emailAddress"
    },
]).then((responses)=> {
    console.log(responses);
});


// array of licenses for user to choose from
// 


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
