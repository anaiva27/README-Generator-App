const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
    {
      type: 'input',
      message: 'Description of the goals you want to achive?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Add installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Explain how to use your application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Mention any guidelines for contributions?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Show any screenshoots or test results?',
      name: 'test',
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'name',
    },

];

// description, installation instructions, usage information, contribution guidelines, and test instructions

// function to write README file
function writeToFile(info) {
  fs.writeFile("readme.md",  generateMarkdown(info), (err) =>
  err ? console.error(err) : console.log("all good"))
  }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    writeToFile(response)
  
           console.log(response)
    });
}

// function call to initialize program
init();
