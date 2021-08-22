// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gMarkd = require('./dist/generateMarkdown');
const util = require('util');
const path = require('path');

//console.log(path);

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
{ type: 'input',
  name: 'tiTle',
  message: 'What is your projet title?',},
  { type: 'input',
  name: 'descriPtion',
  message: 'Provide a brief description of your project',},
  { type: 'input',
  name: 'motiVation',
  message:'What was your motivation?' ,},
  { type: 'input',
  name: 'theWhy',
  message:  'Why did you buid this project?',},
  { type: 'input',
  name: 'theProblem',
  message:  'What problem did you solved?',},
  { type: 'input',
  name: 'theLearn',
  message:  'What did you learn?',},
  { type: 'input',
  name: 'theGithub',
  message:  'What is your githup username?',},
  { type: 'input',
  name: 'theEmail',
  message:  'What is your email address?',},
  {
    type: 'rawlist',
    name: 'liCense',
    message: 'Which license do you want to display?',
    choices: ['GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0','The Unlicense'],
    filter(val) {
      return [ gMarkd.renderLicenseSection(val.toLowerCase()) ,
          gMarkd.renderLicenseLink(val.toLowerCase()),
       gMarkd.renderLicenseBadge(val.toLowerCase())
      ];
    },
  },
];
const promptUser = () => {
    return inquirer.prompt(questions);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filename = path.join("genReadMe/", fileName);
   const writeFileAsync = util.promisify(fs.writeFile);  
   return  writeFileAsync(filename, gMarkd.generateMarkdown(data));

}

// TODO: Create a function to initialize Readme app
function init() {
    promptUser()
    .then((answers) => writeToFile('Readme.md', answers))
    .then(() => console.log('Successfully wrote to Readme File'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
