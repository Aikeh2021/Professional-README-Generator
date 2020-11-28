let license;
// Licenses object for user to choose from (gnuAGPLv3, gnuGPLv3, unlicense, mitLicense)
const licenses = {gnuAGPLv3: "GNU AFFERO GENERAL PUBLIC LICENSE \n Version 3, 19 November 2007 \n Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> \n\n Everyone is permitted to copy and distribute verbatim copies \n of this license document, but changing it is not allowed.",

  gnuGPLv3: "GNU GENERAL PUBLIC LICENSE \n Version 3, 29 June 2007 \n Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> \n Everyone is permitted to copy and distribute verbatim copies \n of this license document, but changing it is not allowed.",

  unlicense: "This is free and unencumbered software released into the public domain. \n Anyone is free to copy, modify, publish, use, compile, sell, or \n distribute this software, either in source code form or as a compiled \n binary, for any purpose, commercial or non-commercial, and by any \n means. \n\n In jurisdictions that recognize copyright laws, the author or authors \nof this software dedicate any and all copyright interest in the \n software to the public domain. We make this dedication for the benefit\n of the public at large and to the detriment of our heirs and \n successors. We intend this dedication to be an overt act of \n relinquishment in perpetuity of all present and future rights to this \n software under copyright law. \n\n THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, \n EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF \n MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. \n IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR \n OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, \n ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR \n OTHER DEALINGS IN THE SOFTWARE.\n For more information, please refer to <https://unlicense.org>",

  mitLicense: "MIT License \n Copyright © [year] [fullname] \n\n Permission is hereby granted, free of charge, to any person obtaining a copy \n of this software and associated documentation files (the 'Software'), to deal \n in the Software without restriction, including without limitation the rights \n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \n copies of the Software, and to permit persons to whom the Software is \n furnished to do so, subject to the following conditions: \n\n The above copyright notice and this permission notice shall be included in all \n copies or substantial portions of the Software. \n\n THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE \n SOFTWARE."}
;

// function to generate markdown for README
let generateMarkdown = 
  (response) => {
  if(response.licenseType === 'gnuAGPLv3'){
    license = `${licenses.gnuAGPLv3}`}
    else if(response.licenseType === 'gnuGPLv3'){
      license = `${licenses.gnuGPLv3}`}
      else if (response.licenseType === "unlicense"){
      license = `${licenses.unlicense}`}
      else if (response.licenseType === "mitLicense"){
        license = `${licenses.mitLicense}`}
      
  

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

  ${response.projectContribution}

  ## Tests

  ${response.projectTesting}
  
  ## Questions
  
  If you have any questions, please contact me via email at: ${response.emailAddress}. I have also included my Github username (${response.Github})in case you would like to contact me via the hosting site or view my previous work.


  ## License
  ${license}
  

`;
return readMeTemplate;
}

module.exports = generateMarkdown;


