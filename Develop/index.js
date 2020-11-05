console.log("Is thing on?");
const inquirer = require("inquirer");
const fs = require("fs");

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
// array of licenses for user to choose from (gnuAGPLv3, gnuGPLv3, unlicense, mitLicense)
const licenses = [
    "GNU AFFERO GENERAL PUBLIC LICENSE \n Version 3, 19 November 2007 \n Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> \n\n Everyone is permitted to copy and distribute verbatim copies \n of this license document, but changing it is not allowed.",

    "GNU GENERAL PUBLIC LICENSE \n Version 3, 29 June 2007 \n Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> \n Everyone is permitted to copy and distribute verbatim copies \n of this license document, but changing it is not allowed.",
  
    "This is free and unencumbered software released into the public domain. \n Anyone is free to copy, modify, publish, use, compile, sell, or \n distribute this software, either in source code form or as a compiled \n binary, for any purpose, commercial or non-commercial, and by any \n means. \n\n In jurisdictions that recognize copyright laws, the author or authors \nof this software dedicate any and all copyright interest in the \n software to the public domain. We make this dedication for the benefit\n of the public at large and to the detriment of our heirs and \n successors. We intend this dedication to be an overt act of \n relinquishment in perpetuity of all present and future rights to this \n software under copyright law. \n\n THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, \n EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF \n MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. \n IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR \n OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, \n ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR \n OTHER DEALINGS IN THE SOFTWARE.\n For more information, please refer to <https://unlicense.org>",
  
    "MIT License \n Copyright © [year] [fullname] \n\n Permission is hereby granted, free of charge, to any person obtaining a copy \n of this software and associated documentation files (the 'Software'), to deal \n in the Software without restriction, including without limitation the rights \n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \n copies of the Software, and to permit persons to whom the Software is \n furnished to do so, subject to the following conditions: \n\n The above copyright notice and this permission notice shall be included in all \n copies or substantial portions of the Software. \n\n THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE \n SOFTWARE.",
];

inquirer
  .prompt([
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
  .then((response) => {
    console.log(response);
    const readMeTemplate = 
    `# ${response.projectTitle}

    ## Description

    ${response.projectDescription}

    ## Table of Contents
    
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)


    ## Installation

    ${response.projectInstallation}

    ## Usage

    ${response.projectUsage}


    ## Contributing

    ${response.projectContriubution}

    ## Tests

    ${response.projectTesting}
    
    ## Questions
    
    If you have any questions, please contact me via email at: ${response.emailAddress}. I have also included my Github username (${response.Github})in case you would like to contact me via the hosting site or view my previous work.


    ## License

    ${licenses+[response.indexOf(response.licenseType)]}


    `;
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("generateMarkdown.md", readMeTemplate, "utf8", (err) => {
    if (err) throw err;
    console.log("Your response was successfully recorded. Click the generateMarkdown.md file to view or edit your prompt responses.");
});
};

// function to initialize program
function init() {}

// function call to initialize program
init();


//    fs.writeFile("generateMarkdown", JSON.stringify(generateMarkdown, null, "\t"), 'utf8', function(err){
//   if (err) throw err;
//   console.log("Your responses was successfully recorded. Click the generatedReadMe.JSON file to view or edit your prompt responses.");
// });
// });
  });