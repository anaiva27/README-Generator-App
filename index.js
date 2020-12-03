const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'title?',
    name: 'title',
  },
    {
      type: 'input',
      message: 'description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'usage?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'contribution?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'test?',
      name: 'test',
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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
