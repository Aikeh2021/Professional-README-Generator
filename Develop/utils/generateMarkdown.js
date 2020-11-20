// function to generate markdown for README
const generateMarkdown = (response) => {
const readMeTemplate = `# ${response.projectTitle}

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
  ${licenses.response}

`;
return readMeTemplate;
}

module.exports = generateMarkdown;
