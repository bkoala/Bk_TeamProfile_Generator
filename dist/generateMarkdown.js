// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "agplv3"){
    return `
    [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
 }else if (license === "gnu gplv3") { return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
 ` ;}
  else if (license === "gnu lgplv3"){return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;}
  else if (license === "mozilla public license 2.0"){return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;}
  else if (license === "apache license 2.0"){return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;}
  else if (license === "mit license"){return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;}
  else if (license === "boost software license 1.0"){return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;}
  else if (license === "the unlicense"){return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;}
  else return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "agplv3"){
    return `https://choosealicense.com/licenses/agpl-3.0/`;
 }else if (license === "gnu gplv3") { return `https://choosealicense.com/licenses/gpl-3.0/` ;}
  else if (license === "gnu lgplv3"){return `https://choosealicense.com/licenses/lgpl-3.0/`;}
  else if (license === "mozilla public license 2.0"){return `https://choosealicense.com/licenses/mpl-2.0/`;}
  else if (license === "apache license 2.0"){return `https://choosealicense.com/licenses/apache-2.0/`;}
  else if (license === "mit license"){return `https://choosealicense.com/licenses/mit/`;}
  else if (license === "boost software license 1.0"){return `https://choosealicense.com/licenses/bsl-1.0/`;}
  else if (license === "the unlicense"){return `https://choosealicense.com/licenses/unlicense/`;}
  else return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
                  
 if (license === "agplv3"){
    return ` Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`;
 }else if (license === "gnu gplv3") { return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights` ;}
  else if (license === "gnu lgplv3"){return `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`;}
  else if (license === "mozilla public license 2.0"){return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work`;}
  else if (license === "apache license 2.0"){return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;}
  else if (license === "mit license"){return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;}
  else if (license === "boost software license 1.0"){return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;}
  else if (license === "the unlicense"){return `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;}
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.tiTle}
${data.liCense[2]}

## Description

${data.descriPtion}

*  Motivation:      

   ${data.motiVation}

* The Why: 

   ${data.theWhy}

*  Problem:
      
   ${data.theProblem}

*  Lesson:

   ${data.theLearn}

## Table of Contents
   1. [Installation](##Installation)
   2. [Usage](##Usage)
   3. [License](##License)
   4. [Contribute](##Contribute)
   5. [Questions](##Questions)

## Installation
    The readme generator requires some files that are provided by installing node modules and package.json in the folder where the index.js file is located. Run " npm init" and "npm install" in the folder where you want run the readme generator.
    
## Usage
    The user answers questions to describe his read me files and a readme file is generated and put in thee genReadMe folder
    Here are screen shots or generated Readme files with different inputs
  
## License
    ${data.liCense[0]}  

    [View Full license information ](${data.liCense[1]})

## Contribute  
    We obide by the contributor code of conduct. 

    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)  
    Please feel free to send us any corrections or fixes that you find when running our application. Our contact information is shown below.   
  
## Questions

  * Github Profile:[https://github.com/${data.theGithub}](https://github.com/${data.theGithub})  
    
   * Contact Email: ${data.theEmail}
`;
}

module.exports = {generateMarkdown,renderLicenseSection,renderLicenseBadge,renderLicenseLink};

