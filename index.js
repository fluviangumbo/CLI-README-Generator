import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Type a few sentences about your project to describe it.',
        name: 'describe',
    },
    {
        type: 'input',
        message: 'How do people install/access your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Give instructions on the proper usage of your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contribute',
    },
    {
        type: 'list',
        message: 'Please pick one of the licensing options for your project.',
        choices: ['MIT License', 'GNU GPLv3', 'Apache-2.0', 'BSD', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'How should people reach you for questions?',
        name: 'question'
    }
];

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(filename, data);
    } catch (err) {
        console.log(err);
        console.log("Unable to write to the file.");
    }
}

function init() {
    inquirer
        .prompt(questions).then((response) =>
            writeToFile('README.md', generateMarkdown(response))
        )
}

init();
