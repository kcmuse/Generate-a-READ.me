const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = (answers) =>
    `
# ${answers.title}

![GitHub License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description

${answers.descrip}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)

## Installation

Below is the instructions to install the dependencies:

\`\`\`
${answers.install}
\`\`\`

## Usage
Provide instructions and examples for use. Include screenshots as needed (This is not done for you)
${answers.usage}

## Contribution

${answers.contri}

## Testing

For testing, run the following command:

\`\`\`
${answers.tests}
\`\`\`


## Questions

For all questions please reach out to me at my email or github!
* [${answers.github}](https://github.com/${answers.github})
* [${answers.email}](mailto:${answers.email})

`;

inquirer.prompt([{
        type: 'input',
        message: 'Enter a title for your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'In a few sentences tell me about your project:',
        name: 'descrip',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions for use:',
        name: 'usage',
        default: `You will need to insert your own images and videos`
    },
    {
        type: 'list',
        message: 'What license does your project have?',
        choices: ['MIT', 'MPL2.0', 'Apache2.0', `LGPLv3`],
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

]).then((answers) => {
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created a README.md!')
    );
});