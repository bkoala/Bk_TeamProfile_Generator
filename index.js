// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gMarkd = require('./src/generateMarkdown');
const util = require('util');
const path = require('path');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
var allAnswers=[];

//console.log(path);

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


//Input Validations
const NumberValidator = async (input) => {
  if (isNaN(input)) {
     return 'Please enter a number!';
  }
  return true;
}
// Email Validator 

const EmailValidator = async (input) =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
  {
    return (true)
  }
    return 'Please enter a valid email address!'
}
  
// Create an array of questions for user input
/*
team manager’s name, employee ID, email address, and office number
*/

//check Number Validation

function getAnswers(xxx) {
const questions = [
{ type: 'input',
  name: 'mngName',
  message: 'What is the team Manager Name?',},
  { type: 'input',
  name: 'mngId',
  message: 'What is the Manager Employee Id',
  validate: NumberValidator,
 },
  { type: 'input',
  message:'What is the Manager Email?' ,
  name: 'mngEmail',
  validate:EmailValidator,
},
  { type: 'input',
  name: 'mngofficeNumber',
  message:'What is the Manager office number?' ,
  validate: NumberValidator,
},
  
];
//Engineer’s name, ID, email, and GitHub username
const questions1 = [
  { type: 'input',
    name: 'engName',
    message: 'What is the Engineer Name?',},
    { type: 'input',
  name: 'engId',
  message: 'What is the Engineer employee Id',
  validate: NumberValidator,
},
    { type: 'input',
    message:'What is the Engineer Email?' ,
    name: 'engEmail',
    validate: EmailValidator,
  },
    { type: 'input',
    name: 'engitHub',
    message:'What is the Engineer github name?' ,},
  
  ];
//Menu questions
const questions4=[
    {
      type: 'rawlist',
      name: 'adEmploye',
      message: 'Please Choose Option from Menu Below?',
      choices: ['Add Engineer', 'Add Intern', 'Exit'],
      filter(val) {
        return (val.toLowerCase());
      },
    },
  
  ];
//Add interns questions 
//intern’s name, ID, email, and school
const questions2 = [
  { type: 'input',
    name: 'intName',
    message: 'What is the Intern Name?'},
    { type: 'input',
      name: 'intId',
     message: 'What is the Intern employee Id',
     validate: NumberValidator,
    },
    { type: 'input',
    message:'What is the Intern Email?' ,
    name: 'intEmail',
    validate: EmailValidator, 
  },
    { type: 'input',
    name: 'intSchool',
    message:'What is the Intern School name?' ,},
   
  ];

//Manager xxx =1 ;Engineer xxx=3; exit xxx=0; intern xxx=2; Menu xxx=4;
if (xxx=== 1){
  return inquirer.prompt(questions).then((answers) => {
      //Push answer in Global variables
      var Engn= new Manager(answers.mngName, answers.mngId, answers.mngEmail,answers.mngofficeNumber);
      allAnswers.push(Engn);
      return getAnswers(4);
     
  });
}
  else if (xxx=== 3){
    return inquirer.prompt(questions1).then((answers) => {
        //Push answer in Global variables
        var Engn= new Engineer(answers.engName, answers.engId, answers.engEmail,answers.engitHub);
        allAnswers.push(Engn);
        return getAnswers(4);
       
    });
  }
  else if (xxx === 2){
    return inquirer.prompt(questions2).then((answers) => {
      var Engn= new Intern(answers.intName, answers.intId, answers.intEmail,answers.intSchool);
      allAnswers.push(Engn);
      return getAnswers(4);

    });
  }
  else if (xxx === 4){
    return inquirer.prompt(questions4).then((answers) => {
       var xcount =0;
      if (answers.adEmploye === "add engineer"){ xcount=3;}
        else if (answers.adEmploye === "add intern"){ xcount=2;}
        else if (answers.adEmploye === "exit"){ xcount=0;}
    //  console.log("Count is " . xcount);
      return getAnswers(xcount);

    });
  }
  else{
    return Promise.resolve( allAnswers);
}
};
// TODO: Create a function to write index file
function writeToFile(fileName, data) {
  //console.log(data);
  const filename = path.join("dist/", fileName);
   const writeFileAsync = util.promisify(fs.writeFile);  
   return  writeFileAsync(filename, gMarkd.generateMarkdown(data));

}

// TODO: Create a function to initialize Readme app
function init() {
    getAnswers(1)
    .then((allAnswers) => writeToFile('index.html', JSON.stringify(allAnswers))) 
    .then(() => console.log('Successfully wrote to Readme File'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
