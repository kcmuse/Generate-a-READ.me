// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () =>
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
            message: 'Enter an install needed for your project:',
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
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What should the user know about contributing to your project?',
            name: 'contri',
        },
        {
            type: 'input',
            message: 'How does the user test this project?',
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

    ])
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();