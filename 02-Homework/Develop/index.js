const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = (answers) =>


    inquirer.prompt([{
            type: 'input',
            message: 'Enter a title for your project:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a description for your project in a few sentences:',
            name: 'descrip',
        },
        {
            type: 'input',
            message: 'What should the user to do install this project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What should the user know about using your project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license does your project have?',
            choices: ['MIT', 'GNU LGPLv3', 'Mozilla', 'Apache'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What should the user know about contributing to your project?',
            name: 'contri',
        },
        {
            type: 'input',
            message: 'What is the command to test this project?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },

    ]);



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();