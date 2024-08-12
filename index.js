// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(filename, data);
    } catch (err) {
        console.log(err);
        console.log("Unable to write to the file.");
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt()
        .then(
            generateMarkdown(data);
            renderLicenseBadge();
            renderLicenseLink();
            renderLicense
        )
}

// Function call to initialize app
init();
