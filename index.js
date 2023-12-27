// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project:',
},
{
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information:',
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please enter contribution guidelines:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions:',
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username:',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
