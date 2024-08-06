// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data) { //something wrong with this, was trying to use promise for fs.writeFile
        try {
            generateMarkdown(data);
        } catch (err) {
            console.log("Unable to write to the file.")
        }
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt()
        .then()
}

// Function call to initialize app
init();
