console.log("Is thing on?");
const inquirer = require("inquirer");
const fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the name/title of your project?",
  "What can you tell me about your project? Write a brief description (no more than 2 paragraphs)",
  "How would a user install your project? Write step-by-step instructions.",
  "How should a client properly use this product?",
  "How can I, another developer, contribute to this project? Please write clear and concise guidelines.",
  "How can I test this application? Please write clear and concise instructions.",
  "What is your Github username?",
  "What is the best email address for users to contact you with questions?",
  "Which license would you like included on your README.md file?",
];


// Inquirer prompts the user will interact with
const userPrompts = () => {
   return inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "projectTitle",
    },
    {
      type: "input",
      message: questions[1],
      name: "projectDescription",
    },
    {
      type: "input",
      message: questions[2],
      name: "projectInstallation",
    },
    {
      type: "input",
      message: questions[3],
      name: "projectUsage",
    },
    {
      type: "input",
      message: questions[4],
      name: "projectContribution",
    },
    {
      type: "input",
      message: questions[5],
      name: "projectTesting",
    },
    {
      type: "input",
      message: questions[6],
      name: "Github",
    },
    {
      type: "input",
      message: questions[7],
      name: "emailAddress",
    },
    {
      type: "list",
      message: questions[8],
      name: "licenseType",
      choices: ["gnuAGPLv3", "gnuGPLv3", "unlicense", "mitLicense"]
    },
  ])
};
  // function to write README file
  // .then((response) => {
  //   console.log(response);
  //   let generatedMarkdown = generateMarkdown(response);
  //   fs.writeFileSync("generatedREADME.md", generatedMarkdown, "utf8", (err) => {
  //       if (err) throw err;
  //       console.log("Your response was successfully recorded. Click the generateMarkdown.md file to view or edit your prompt responses.");
  // })


// // function to initialize program
// const init = async function(){
//   console.log(response);
//   try{
//     const response = await userPrompts();
//     let generatedMarkdown = generateMarkdown(response);
//       // function to write README file
//     await fs.writeFileAsync("generatedREADME.md", generatedMarkdown, "utf8");
//     console.log("Your response was successfully recorded. Click the generateMarkdown.md file to view or edit your prompt responses.");
//   } catch (err){
//     console.log(err);
//   }
// };

// // function call to initialize program
// init();



// function to initialize program
const init = async function(){
  console.log("hello.");
  try{
    const response = await userPrompts();
    let generatedMarkdown = generateMarkdown(response);
      // function to write README file
    fs.writeFile("generatedREADME.md", generatedMarkdown, "utf8",(err)=> {
      try {console.log("Your response was successfully recorded. Click the generateMarkdown.md file to view or edit your prompt responses.");
    } catch (err){
      console.log(err);
    }
  }
  ;

// function call to initialize program
init();



